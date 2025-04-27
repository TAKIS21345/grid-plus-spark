
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link?: string;
}

const ServiceCard = ({ title, description, icon: Icon, link = '/services' }: ServiceCardProps) => {
  return (
    <Card className="border border-gray-200 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <CardHeader className="pb-4">
        <div className="w-12 h-12 bg-electric-light rounded-full flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-electric-blue" />
        </div>
        <CardTitle className="text-xl font-bold text-electric-dark">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-base text-gray-600">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="ghost" className="hover:bg-electric-light hover:text-electric-blue">
          <Link to={link}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
