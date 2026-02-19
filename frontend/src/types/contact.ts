// Contact Types for KRIVOX

export interface ContactInfo {
  phone: string;
  email: string;
  whatsapp: string;
  address: {
    street: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
  data?: ContactFormData;
  error?: string;
}