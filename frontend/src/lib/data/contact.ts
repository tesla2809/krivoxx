// Contact information for KRIVOX
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { ContactInfo } from '@/types';

export const contactInfo: ContactInfo = {
  phone: '+91 99988 13569',
  email: 'aditya@krivoxx.com',
  whatsapp: '+919998813569',
  address: {
    street: 'Plot no 78 sakar society meghpar borichi',
    city: 'Anajar',
    state: 'Gujarat',
    pincode: '370110',
    country: 'India',
  },
  hours: {
    weekdays: 'Monday - Friday: 9:00 AM - 7:00 PM',
    saturday: 'Saturday: 9:00 AM - 5:00 PM',
    sunday: 'Sunday: Closed',
  },
  social: {
    facebook: 'https://facebook.com/krivox',
    instagram: 'https://instagram.com/krivox',
    linkedin: 'https://linkedin.com/company/krivox',
    twitter: 'https://twitter.com/krivox',
  },
};

export const contactIcons = {
  phone: Phone,
  email: Mail,
  location: MapPin,
  hours: Clock,
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  twitter: Twitter,
};

export const officeLocations = [
  {
    name: 'Main Office - Gandhidham',
    address: 'Plot no 78 sakar society meghpar borichi Anjar, Gujarat 370110',
    phone: '+91 99988 13569',
    email: 'aditya@krivoxx.com',
    coordinates: {
      lat: 23.0756,
      lng: 70.1318,
    },
  },
];

export const serviceAreas = [
  'Gandhidham',
  'Kutch',
  'Mundra',
  'Bhuj',
  'Adipur',
  'Anjar',
  'Ahmedabad',
  'Gujarat',
  'All India (Remote)',
];