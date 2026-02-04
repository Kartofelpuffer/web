import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Check } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const formatServiceTypes = (types) => {
  const serviceMap = {
    oil_change: 'Oil Change',
    brakes: 'Brake Service',
    detailing: 'Auto Detailing'
  };
  return (types || []).map(t => serviceMap[t] || t).join(', ');
};

const getZohoAccessToken = async () => {
  try {
    const response = await fetch('https://accounts.zoho.com/oauth/v2/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: process.env.REACT_APP_ZOHO_CLIENT_ID || '',
        client_secret: process.env.REACT_APP_ZOHO_CLIENT_SECRET || '',
        refresh_token: process.env.REACT_APP_ZOHO_REFRESH_TOKEN || '',
        grant_type: 'refresh_token'
      }).toString()
    });
    const { access_token } = await response.json();
    return access_token;
  } catch (error) {
    console.error('Failed to get Zoho token:', error);
    throw new Error('Authentication failed');
  }
};

export default function ServiceInquiryForm({ onSuccess }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm({
    defaultValues: {
      first_name: '',
      last_name: '',
      phone: '',
      email: '',
      service_type: [],
      vehicle_info: '',
      message: ''
    }
  });

  const serviceTypes = watch('service_type');

  const onSubmit = async (data) => {
    if (!data.service_type || data.service_type.length === 0) {
      alert('Please select at least one service type');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Check if running on Base44 (has base44 client available)
      let response;
      const isBase44 = typeof window !== 'undefined' && window.__BASE44_CONFIG;
      
      if (isBase44) {
        // Use Base44 backend function
        const { base44 } = await import('@/api/base44Client');
        response = await base44.functions.invoke('sendToZohoCRM', {
          event: { entity_name: 'ServiceInquiry', type: 'create' },
          data: data
        });
      } else {
        // Direct Zoho CRM API call for Vercel/external hosting
        response = await fetch('https://www.zohoapis.com/crm/v2/Leads', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${await getZohoAccessToken()}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            data: [{
              First_Name: data.first_name || '',
              Last_Name: data.last_name || '',
              Phone: data.phone,
              Email: data.email,
              Description: `Vehicle: ${data.vehicle_info || ''}\n\nServices: ${formatServiceTypes(data.service_type)}\n\nMessage: ${data.message || ''}`
            }]
          })
        });
        
        if (!response.ok) throw new Error('Failed to submit to Zoho CRM');
      }
      
      // Show success
      setIsSuccess(true);
      
      setTimeout(() => {
        if (onSuccess) {
          onSuccess();
        }
      }, 2000);
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      alert('Error submitting request. Please try again.');
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center p-8 bg-green-50 dark:bg-green-900/20 rounded-lg"
      >
        <CheckCircle2 className="w-16 h-16 text-green-600 dark:text-green-400 mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Request Submitted!</h3>
        <p className="text-gray-600 dark:text-gray-300 text-center">
          We'll contact you shortly to schedule your service.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="first_name" className="text-black">First Name *</Label>
          <Input
            id="first_name"
            {...register('first_name', { required: 'First name is required' })}
            placeholder="John"
            className={errors.first_name ? 'border-red-500' : ''}
          />
          {errors.first_name && (
            <p className="text-sm text-red-500">{errors.first_name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="last_name" className="text-black">Last Name</Label>
          <Input
            id="last_name"
            {...register('last_name')}
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-black">Phone *</Label>
          <Input
            id="phone"
            type="tel"
            {...register('phone', { required: 'Phone number is required' })}
            placeholder="(214) 842-7614"
            className={errors.phone ? 'border-red-500' : ''}
          />
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-black">Email</Label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label className="text-black">Service Type * (Select all that apply)</Label>
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline" className="w-full justify-start text-left font-normal bg-white text-black border-gray-300 hover:bg-gray-50">
              {serviceTypes?.length > 0 
                ? `${serviceTypes.length} service${serviceTypes.length > 1 ? 's' : ''} selected`
                : 'Select services'}
            </Button>
          </DrawerTrigger>
          <DrawerContent className="bg-white">
            <DrawerHeader>
              <DrawerTitle className="text-black">Select Services</DrawerTitle>
            </DrawerHeader>
            <div className="px-4 pb-4 max-h-[60vh] overflow-y-auto bg-gray-50">
              {[
                { value: 'oil_change', label: 'Oil Change' },
                { value: 'brakes', label: 'Brake Service' },
                { value: 'detailing', label: 'Auto Detailing' }
              ].map((service) => (
                <button
                  key={service.value}
                  type="button"
                  onClick={() => {
                    const isSelected = serviceTypes?.includes(service.value);
                    const updatedTypes = isSelected
                      ? (serviceTypes || []).filter((type) => type !== service.value)
                      : [...(serviceTypes || []), service.value];
                    setValue('service_type', updatedTypes);
                  }}
                  className="w-full flex items-center justify-between px-4 py-4 border-b border-gray-200 bg-white hover:bg-blue-50 active:bg-blue-100 transition-colors"
                >
                  <span className="text-base font-medium text-gray-900">{service.label}</span>
                  {serviceTypes?.includes(service.value) && (
                    <Check className="w-5 h-5 text-blue-600 font-bold" />
                  )}
                </button>
              ))}
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button className="w-full">Done</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        {errors.service_type && (
          <p className="text-sm text-red-500">Please select at least one service</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="vehicle_info" className="text-black">Vehicle Information</Label>
        <Input
          id="vehicle_info"
          {...register('vehicle_info')}
          placeholder="e.g., 2020 Toyota Camry"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-black">Additional Details</Label>
        <Textarea
          id="message"
          {...register('message')}
          placeholder="Tell us about any specific issues or concerns..."
          rows={4}
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
        size="lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Submitting...
          </>
        ) : (
          'Submit Request'
        )}
      </Button>
    </form>
  );
}