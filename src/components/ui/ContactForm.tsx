import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const { toast } = useToast();
  const [state, handleSubmit] = useForm("mwpbvqvg");

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e);
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message
    toast({
      title: 'Request Submitted!',
      description: 'We will contact you shortly.',
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  if (state.succeeded) {
    return <p className="text-green-700 font-semibold text-center py-8">Thank you! Your request has been submitted. We'll contact you soon.</p>;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              placeholder="(916) 123-4567"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div>
          <Label htmlFor="service">Service Needed</Label>
          <Select
            name="service"
            value={formData.service}
            onValueChange={handleServiceChange}
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Select service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="residential">Residential Wiring</SelectItem>
              <SelectItem value="commercial">Commercial Installation</SelectItem>
              <SelectItem value="lighting">Lighting Services</SelectItem>
              <SelectItem value="emergency">Emergency Repairs</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Please provide details about your electrical needs..."
            value={formData.message}
            onChange={handleChange}
            className="min-h-[120px]"
            required
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
      </div>
      
      <Button 
        type="submit"
        className="w-full bg-electric-blue hover:bg-electric-dark"
        disabled={state.submitting}
      >
        Submit Request
      </Button>
    </form>
  );
};

export default ContactForm;
