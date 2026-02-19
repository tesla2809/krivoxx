// Testimonials data for KRIVOX
import { Testimonial } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Patel',
    company: 'Patel Transport Services',
    position: 'Owner',
    content: 'KRIVOX helped us set up our first website and WhatsApp booking system. Now we get 10+ inquiries daily without any manual work. Highly recommended!',
    rating: 5,
    location: 'Gandhidham, Gujarat',
    date: '2024-11-15',
    service: 'Website + WhatsApp Integration',
  },
  {
    id: '2',
    name: 'Meena Shah',
    company: 'Shah Exports',
    position: 'Managing Director',
    content: 'As an MSME, we struggled with finding new clients. KRIVOX\'s Meta ads campaigns brought us quality leads and our business grew 40% in 6 months.',
    rating: 5,
    location: 'Kutch, Gujarat',
    date: '2024-10-22',
    service: 'Lead Generation',
  },
  {
    id: '3',
    name: 'Dr. Amit Desai',
    company: 'Desai Dental Clinic',
    position: 'Dentist',
    content: 'The online appointment booking system has made our life so much easier. Patients can book directly and we get automated reminders. Excellent service!',
    rating: 5,
    location: 'Gandhidham, Gujarat',
    date: '2024-12-05',
    service: 'Booking System',
  },
  {
    id: '4',
    name: 'Kiran Mehta',
    company: 'Mehta Fitness Studio',
    position: 'Founder',
    content: 'Social media management by KRIVOX has doubled our membership inquiries. Their Gujarati content really connects with our local audience.',
    rating: 5,
    location: 'Bhuj, Gujarat',
    date: '2024-11-28',
    service: 'Social Media Marketing',
  },
  {
    id: '5',
    name: 'Suresh Kumar',
    company: 'Kumar Industries',
    position: 'Operations Head',
    content: 'The CRM and automation setup has streamlined our entire sales process. We can now handle 3x more clients with the same team size.',
    rating: 5,
    location: 'Mundra, Gujarat',
    date: '2024-10-10',
    service: 'Business Automation',
  },
  {
    id: '6',
    name: 'Priya Joshi',
    company: 'Joshi Real Estate',
    position: 'Owner',
    content: 'Their website and lead generation system has transformed our business. We now get online inquiries 24/7 and our closing rate has improved significantly.',
    rating: 5,
    location: 'Gandhidham, Gujarat',
    date: '2024-12-01',
    service: 'Digital Presence + Leads',
  },
];

export function getRandomTestimonials(count: number = 3): Testimonial[] {
  const shuffled = [...testimonials].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function getTestimonialsByService(service: string): Testimonial[] {
  return testimonials.filter((t) => 
    t.service.toLowerCase().includes(service.toLowerCase())
  );
}