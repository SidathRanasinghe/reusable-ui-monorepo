import { ReactNode, useEffect, useState } from "react";

import { cn, generateUniqueId } from "../../../lib/utils";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";

export interface CarouselItem {
  key?: string | number;
  content: ReactNode;
  data?: any;
}

export interface AdvancedCarouselProps {
  items: CarouselItem[];
}

const AdvancedCarousel = ({ items }: AdvancedCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="size-full max-w-5xl overflow-hidden">
      <Carousel
        setApi={setApi}
        draggable={false}
        className="flex size-full flex-col items-start justify-between gap-y-2"
        opts={{
          dragFree: false,
          watchDrag: false,
        }}
      >
        <CarouselContent className="size-full" draggable={false}>
          {items?.map(item => (
            <CarouselItem key={item.key || generateUniqueId()}>
              {item.content && item.content}
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center gap-2">
          <CarouselPrevious
            variant={null}
            size="sm"
            className="relative !inset-[unset] !h-6 !w-8 !translate-x-0 !translate-y-0 !bg-dark-50"
          />
          <div className="flex gap-2">
            {Array.from({ length: items?.length || 2 }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "size-1.5 rounded-full transition-all",
                  current === index ? "bg-primary" : "bg-gray-300"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <CarouselNext
            variant={null}
            size="sm"
            className="relative !inset-[unset] !h-6 !w-8 !translate-x-0 !translate-y-0 !bg-dark-50"
          />
        </div>
      </Carousel>
      <style>
        {`
          .no-drag {
            touch-action: none;
          }
        `}
      </style>
    </div>
  );
};

export default AdvancedCarousel;
