import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import testimonial1 from "@assets/download (1)_1762782661761.jpeg";
import testimonial2 from "@assets/images (1)_1762782661761.jpeg";
import testimonial3 from "@assets/download_1762782661762.jpeg";

import download_1762782661762 from "@assets/download_1762782661762.jpeg";

import download__1_ from "@assets/download (1).jpeg";

import _1 from "@assets/1.jpeg";

const testimonials = [
  {
    name: "Ravi Kumar",
    designation: "Chartered Accountant",
    organization: "RK & Associates",
    image: testimonial1,
    feedback:
      "The CA Application developed by Shubhang's team has transformed our workflow. We can now manage client queries, employee communication, and attendance tracking seamlessly in one place. The biometric integration for remote staff is especially impressive — it's reliable, efficient, and user-friendly.",
    projectName: "CA Application",
  },
  {
    name: "Anil Deshmukh",
    designation: "Project Head",
    organization: "Rural Banking Integration Program",
    image: testimonial2,
    feedback:
      "EddoSwipe has been a breakthrough for rural financial accessibility. The platform enables transactions and government services even in low-connectivity areas. Thanks to Shubhang's robust backend architecture, we now handle thousands of transactions daily with exceptional reliability.",
    projectName: "EddoSwipe",
  },
  {
    name: "Rahul Shetty",
    designation: "Technical Coordinator",
    organization: "Alva's PU College",
    image: testimonial3,
    feedback:
      "The RFID Telephony Application developed by Shubhang's team has been a major success for us. Over 500+ telephone recharge machines are now seamlessly integrated with the system, handling 1 crore+ transactions every year through this portal. The reliability, scalability, and performance of the solution have greatly improved our operational efficiency and automation.",
    projectName: "Vithsutra RFID Telephony Application",
  },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 md:py-32 px-6 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-deep-black text-center mb-4">
          Testimonials
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-16 glow-gold" />

        <div className="relative">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden bg-muted border-2 border-primary/10">
                  <img
                    src={_1}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                    data-testid={`testimonial-image-${currentIndex}`}
                  />
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-deep-black mb-1">
                      {currentTestimonial.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {currentTestimonial.designation}
                    </p>
                    <p className="text-sm font-medium text-primary">
                      {currentTestimonial.organization}
                    </p>
                  </div>
                  <Quote className="w-8 h-8 text-primary/20 flex-shrink-0" />
                </div>

                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  {currentTestimonial.feedback}
                </p>

                <div className="pt-2">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {currentTestimonial.projectName}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              className="rounded-full h-12 w-12 border-2 border-primary/20 hover:border-primary hover:bg-primary/5"
              data-testid="button-testimonial-previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-primary/30 hover:bg-primary/50"
                  }`}
                  data-testid={`button-testimonial-dot-${index}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full h-12 w-12 border-2 border-primary/20 hover:border-primary hover:bg-primary/5"
              data-testid="button-testimonial-next"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
