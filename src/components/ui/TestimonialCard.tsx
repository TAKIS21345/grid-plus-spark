
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  rating: number;
  content: string;
  date: string;
}

const TestimonialCard = ({ name, rating, content, date }: TestimonialCardProps) => {
  return (
    <Card className="border border-gray-200 hover:shadow-md transition-shadow duration-300 h-full">
      <CardContent className="p-6">
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className={`${
                i < rating ? 'text-electric-yellow fill-electric-yellow' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <p className="text-gray-700 mb-4">{content}</p>
        <div className="flex justify-between items-center">
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
