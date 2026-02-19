import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { contactInfo } from '@/lib/data/contact';

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
              <a href={`tel:${contactInfo.phone}`} className="text-gray-600 hover:text-primary transition-colors">
                {contactInfo.phone}
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
              <a href={`mailto:${contactInfo.email}`} className="text-gray-600 hover:text-primary transition-colors">
                {contactInfo.email}
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
              <p className="text-gray-600">
                {contactInfo.address.street}<br />
                {contactInfo.address.city}, {contactInfo.address.state}<br />
                {contactInfo.address.pincode}, {contactInfo.address.country}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p>{contactInfo.hours.weekdays}</p>
                <p>{contactInfo.hours.saturday}</p>
                <p>{contactInfo.hours.sunday}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
