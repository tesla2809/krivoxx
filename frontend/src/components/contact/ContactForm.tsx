'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { useContactForm } from '@/hooks/useContactForm';
import { useToast } from '@/components/ui/toast';
import { Loader2 } from 'lucide-react';

export function ContactForm() {
  const { form, onSubmit, isSubmitting, submitStatus } = useContactForm();
  const { showToast, ToastContainer } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit();
    
    if (submitStatus === 'success') {
      showToast('Message sent successfully! We will contact you soon.', 'success');
    } else if (submitStatus === 'error') {
      showToast('Failed to send message. Please try again.', 'error');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <Input
              id="name"
              {...form.register('name')}
              placeholder="Enter your name"
              className={form.formState.errors.name ? 'border-red-500' : ''}
            />
            {form.formState.errors.name && (
              <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <Input
              id="email"
              type="email"
              {...form.register('email')}
              placeholder="your@email.com"
              className={form.formState.errors.email ? 'border-red-500' : ''}
            />
            {form.formState.errors.email && (
              <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <Input
              id="phone"
              {...form.register('phone')}
              placeholder="9999999999"
              className={form.formState.errors.phone ? 'border-red-500' : ''}
            />
            {form.formState.errors.phone && (
              <p className="text-red-500 text-sm mt-1">{form.formState.errors.phone.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              Company Name
            </label>
            <Input
              id="company"
              {...form.register('company')}
              placeholder="Your company"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
              Service Interested In *
            </label>
            <Select
              id="service"
              {...form.register('service')}
              className={form.formState.errors.service ? 'border-red-500' : ''}
            >
              <option value="">Select a service</option>
              <option value="digital-presence">Digital Presence & Branding</option>
              <option value="lead-generation">Lead Generation & Growth</option>
              <option value="business-automation">Business Automation</option>
              <option value="tech-solutions">Tech Solutions</option>
              <option value="consultation">General Consultation</option>
            </Select>
            {form.formState.errors.service && (
              <p className="text-red-500 text-sm mt-1">{form.formState.errors.service.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
              Budget Range
            </label>
            <Select id="budget" {...form.register('budget')}>
              <option value="">Select budget</option>
              <option value="10-25k">₹10,000 - ₹25,000</option>
              <option value="25-50k">₹25,000 - ₹50,000</option>
              <option value="50k-1L">₹50,000 - ₹1,00,000</option>
              <option value="1L+">₹1,00,000+</option>
            </Select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <Textarea
            id="message"
            {...form.register('message')}
            placeholder="Tell us about your project requirements..."
            className={form.formState.errors.message ? 'border-red-500' : ''}
          />
          {form.formState.errors.message && (
            <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
          )}
        </div>

        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </Button>
      </form>
      {ToastContainer}
    </>
  );
}