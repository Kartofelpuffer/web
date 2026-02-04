import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { base44 } from '@/api/base44Client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Check } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FleetServiceForm({ onSuccess }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
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
    
    try {
      // Send to Zoho CRM
      await base44.functions.invoke('sendToZohoCRM', {
        event: { entity_name: 'FleetInquiry', type: 'create' },
        data: data
      });
      
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
          We'll contact you shortly to discuss your fleet service needs.
        </p>
      </motion.div>
    );
  }

  const serviceOptions = [
    { value: 'oil_change', label: 'Oil Changes & Fluid Services' },
    { value: 'brakes', label: 'Brake Inspections & Repairs' },
    { value: 'multi_point_inspection', label: 'Multi-Point Inspections' },
    { value: 'preventive_maintenance', label: 'Preventive Maintenance' },
    { value: 'tire_services', label: 'Tire Services' },
    { value: 'battery_services', label: 'Battery Testing & Replacement' },
    { value: 'detailing', label: 'Fleet Detailing' }
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="business_name" className="text-black">Business Name *</Label>
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
            placeholder="contact@company.com"
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
              <DrawerTitle className="text-black">Select Fleet Services</DrawerTitle>
            </DrawerHeader>
            <div className="px-4 pb-4 max-h-[60vh] overflow-y-auto bg-gray-50">
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
        <Label htmlFor="fleet_info" className="text-black">Fleet Information *</Label>
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
        <Label htmlFor="additional_details" className="text-black">Additional Details</Label>
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