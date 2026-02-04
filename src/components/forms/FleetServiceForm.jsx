import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Check, Loader2, CheckCircle2 } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';

const serviceOptions = [
  { value: 'oil_change', label: 'Oil Changes & Fluid Services' },
  { value: 'brakes', label: 'Brake Inspections & Repairs' },
  { value: 'multi_point_inspection', label: 'Multi-Point Inspections' },
  { value: 'preventive_maintenance', label: 'Preventive Maintenance' },
  { value: 'battery_services', label: 'Battery Testing & Replacement' },
  { value: 'detailing', label: 'Fleet Detailing' }
];

const formatServiceTypes = (types) => {
  const serviceMap = {
    oil_change: 'Oil Change',
    brakes: 'Brake Service',
    detailing: 'Auto Detailing',
    preventive_maintenance: 'Preventive Maintenance',
    battery_services: 'Battery Services',
    multi_point_inspection: 'Multi-Point Inspection'
  };
  return (types || []).map(t => serviceMap[t] || t).join(', ');
};

export default function FleetServiceForm({ onSuccess }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm({
    defaultValues: {
      business_name: '',
      phone: '',
      email: '',
      service_type: [],
      fleet_info: '',
      additional_details: ''
    }
  });

  const serviceTypes = watch('service_type');

  const onSubmit = async (data) => {
    if (!data.service_type || data.service_type.length === 0) {
      alert('Please select at least one service type');
      return;
    }
    
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      // Step 1: Get access token from Zoho
      const tokenResponse = await fetch('https://accounts.zoho.com/oauth/v2/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          client_id: import.meta.env.VITE_ZOHO_CLIENT_ID,
          client_secret: import.meta.env.VITE_ZOHO_CLIENT_SECRET,
          refresh_token: import.meta.env.VITE_ZOHO_REFRESH_TOKEN,
          grant_type: 'refresh_token'
        }).toString()
      });

      if (!tokenResponse.ok) {
        throw new Error('Failed to authenticate with Zoho');
      }

      const tokenData = await tokenResponse.json();
      const accessToken = tokenData.access_token;

      // Step 2: Create lead in Zoho CRM
      const crmResponse = await fetch('https://www.zohoapis.com/crm/v2/Leads', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: [{
            Last_Name: data.business_name,
            Phone: data.phone,
            Email: data.email || '',
            Description: `Fleet Info: ${data.fleet_info}\n\nServices: ${formatServiceTypes(data.service_type)}\n\nAdditional Details: ${data.additional_details || ''}`
          }]
        })
      });

      if (!crmResponse.ok) {
        throw new Error('Failed to create lead in Zoho CRM');
      }

      setIsSuccess(true);
      setTimeout(() => {
        if (onSuccess) onSuccess();
      }, 2000);
    } catch (error) {
      console.error('Form submission error:', error);
      setErrorMessage(error.message || 'Error submitting request. Please try again.');
      setIsSubmitting(false);
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
          We'll contact you shortly to discuss your fleet service needs.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {errorMessage && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 p-3 rounded-md text-sm">
          {errorMessage}
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="business_name" className="text-black dark:text-white">Business Name *</Label>
        <Input
          id="business_name"
          {...register('business_name', { required: 'Business name is required' })}
          placeholder="Your Company Name"
          className={errors.business_name ? 'border-red-500' : ''}
        />
        {errors.business_name && (
          <p className="text-sm text-red-500">{errors.business_name.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-black dark:text-white">Phone *</Label>
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
          <Label htmlFor="email" className="text-black dark:text-white">Email</Label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            placeholder="contact@company.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label className="text-black dark:text-white">Service Type * (Select all that apply)</Label>
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline" className="w-full justify-start text-left font-normal bg-white text-black border-gray-300 hover:bg-gray-50 dark:bg-gray-900 dark:text-white dark:border-gray-700">
              {serviceTypes?.length > 0 
                ? `${serviceTypes.length} service${serviceTypes.length > 1 ? 's' : ''} selected`
                : 'Select services'}
            </Button>
          </DrawerTrigger>
          <DrawerContent className="bg-white dark:bg-gray-900">
            <DrawerHeader>
              <DrawerTitle className="text-black dark:text-white">Select Fleet Services</DrawerTitle>
            </DrawerHeader>
            <div className="px-4 pb-4 max-h-[60vh] overflow-y-auto">
              {serviceOptions.map((service) => (
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
                  className="w-full flex items-center justify-between px-4 py-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-blue-50 dark:hover:bg-blue-900/20 active:bg-blue-100 dark:active:bg-blue-900/40 transition-colors"
                >
                  <span className="text-base font-medium text-gray-900 dark:text-white">{service.label}</span>
                  {serviceTypes?.includes(service.value) && (
                    <Check className="w-5 h-5 text-blue-600 dark:text-blue-400" />
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
      </div>

      <div className="space-y-2">
        <Label htmlFor="fleet_info" className="text-black dark:text-white">Fleet Information *</Label>
        <Textarea
          id="fleet_info"
          {...register('fleet_info', { required: 'Fleet information is required' })}
          placeholder="Number of vehicles, makes/models, typical mileage, etc."
          rows={3}
          className={errors.fleet_info ? 'border-red-500' : ''}
        />
        {errors.fleet_info && (
          <p className="text-sm text-red-500">{errors.fleet_info.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="additional_details" className="text-black dark:text-white">Additional Details</Label>
        <Textarea
          id="additional_details"
          {...register('additional_details')}
          placeholder="Any special requirements, preferred schedule, budget considerations, etc."
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
          'Submit Fleet Inquiry'
        )}
      </Button>
    </form>
  );
}