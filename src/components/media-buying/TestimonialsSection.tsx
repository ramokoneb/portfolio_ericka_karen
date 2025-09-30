
import React from "react";

interface Testimonial {
  text: string;
  author: string;
}

interface TestimonialsSectionProps {
  title: string;
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ 
  title, 
  testimonials 
}) => {
  return (
    <section className="max-w-5xl mx-auto mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-darker">
          {title}
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="glass-card p-6 md:p-8">
            <div className="flex items-center mb-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                ))}
              </div>
            </div>
            <blockquote className="text-primary-darker leading-relaxed mb-6 text-base md:text-lg">
              "{testimonial.text}"
            </blockquote>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                <span className="text-primary-dark font-bold text-sm">
                  {testimonial.author.charAt(0)}
                </span>
              </div>
              <p className="text-primary-darker font-bold">
                {testimonial.author}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
