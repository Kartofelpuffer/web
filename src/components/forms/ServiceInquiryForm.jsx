import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Check, Loader2, CheckCircle2 } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';

const serviceOptions = [
  { value: 'brakes', label: 'Brake Service' },
  { value: 'oil_change', label: 'Oil Change' },
  { value: 'detailing', label: 'Auto Detailing' }
];

const formatServiceTypes = (types) => {
  const serviceMap = {
    oil_change: 'Oil Change',
    brakes: 'Brake Service',
    detailing: 'Auto Detailing'
  };
  return (types || []).map(t => serviceMap[t] || t).join(', ');
};

export default function ServiceInquiryForm({ onSuccess }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
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
    setErrorMessage('');
    
    try {
      await base44.entities.ServiceInquiry.create(data);
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
          We'll contact you shortly to discuss your service needs.
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
        <Label className="text-black dark:text-white">Service Type * (Select all that apply)</Label>
        <Drawer>
          <DrawerTrigger asChild>
            <Button className="w-full bg-white hover:bg-gray-100 text-black border border-gray-300">
              {serviceTypes?.length > 0 
                ? `${serviceTypes.length} service${serviceTypes.length > 1 ? 's' : ''} selected`
                : 'Select services'}
            </Button>
          </DrawerTrigger>
          <DrawerContent className="bg-white text-black">
            <DrawerHeader>
              <DrawerTitle className="text-black">Select Services</DrawerTitle>
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
                  className="w-full flex items-center justify-between px-4 py-4 border-b border-gray-200 bg-white hover:bg-blue-50 active:bg-blue-100 transition-colors"
                >
                  <span className="text-base font-medium text-black">{service.label}</span>
                  {serviceTypes?.includes(service.value) && (
                    <Check className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  )}
                </button>
              ))}
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Done</Button>
                </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>

      <div className="space-y-2">
        <Label htmlFor="vehicle_info" className="text-black">Vehicle Info (Year, Make, Model) *</Label>
        <Input
          id="vehicle_info"
          {...register('vehicle_info', { required: 'Vehicle information is required' })}
          placeholder="2020 Honda Civic"
          className={errors.vehicle_info ? 'border-red-500' : ''}
        />
        {errors.vehicle_info && (
          <p className="text-sm text-red-500">{errors.vehicle_info.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-black">Additional Message</Label>
        <Textarea
          id="message"
          {...register('message')}
          placeholder="Any additional details about your service needs..."
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
          'Submit Service Inquiry'
        )}
      </Button>
    </form>
  );
}