import React, { useState } from 'react';
import Section from './Section';
import { QuoteIcon } from './IconComponents';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  content: string;
  rating?: number;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <Section title="Testimonials" subtitle="What People Say About Me">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-white dark:bg-slate-800/50 rounded-2xl shadow-xl p-8 md:p-12 backdrop-blur-sm ring-1 ring-slate-200 dark:ring-slate-700">
          {/* Quote Icon */}
          <div className="absolute top-6 left-6 text-cyan-500/20 dark:text-cyan-400/20">
            <QuoteIcon className="w-16 h-16 md:w-20 md:h-20" />
          </div>
          
          {/* Testimonial Content */}
          <div className="relative z-10">
            {/* Rating Stars (if provided) */}
            {currentTestimonial.rating && (
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < currentTestimonial.rating! 
                        ? 'text-yellow-400 fill-current' 
                        : 'text-slate-300 dark:text-slate-600 fill-current'
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            )}
            
            {/* Testimonial Text */}
            <blockquote className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
              "{currentTestimonial.content}"
            </blockquote>
            
            {/* Author Info */}
            <div className="flex items-center gap-4">
              <img
                src={currentTestimonial.avatarUrl}
                alt={`${currentTestimonial.name}'s avatar`}
                className="w-14 h-14 rounded-full object-cover ring-2 ring-cyan-500/30"
              />
              <div>
                <div className="font-semibold text-slate-900 dark:text-white">
                  {currentTestimonial.name}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {currentTestimonial.role} at {currentTestimonial.company}
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Arrows (if multiple testimonials) */}
          {testimonials.length > 1 && (
            <>
              <button
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:bg-cyan-500 hover:text-white transition-all duration-300 group"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:bg-cyan-500 hover:text-white transition-all duration-300 group"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>
        
        {/* Dots Navigation (if multiple testimonials) */}
        {testimonials.length > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-cyan-500 dark:bg-cyan-400'
                    : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
};

export default Testimonials;
