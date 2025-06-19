import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { CircleX } from "lucide-react";

import {
  InteractiveCarousel,
  type CarouselSlide,
} from "../../packages/ui-core/src/components/core/interactive-carousel";

// Mock slide content components
const ImageSlide = ({
  src,
  alt,
  title,
}: {
  src: string;
  alt: string;
  title?: string;
}) => (
  <div className="relative h-64 w-full overflow-hidden rounded-lg bg-gray-100">
    <img src={src} alt={alt} className="size-full object-cover" />
    {title && (
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
    )}
  </div>
);

const ContentSlide = ({
  title,
  description,
  color = "bg-blue-500",
}: {
  title: string;
  description: string;
  color?: string;
}) => (
  <div
    className={`${color} flex h-64 flex-col items-center justify-center rounded-lg p-8 text-center text-white`}
  >
    <h2 className="mb-4 text-2xl font-bold">{title}</h2>
    <p className="text-lg opacity-90">{description}</p>
  </div>
);

const ProductCard = ({
  name,
  price,
  image,
}: {
  name: string;
  price: string;
  image: string;
}) => (
  <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
    <img src={image} alt={name} className="h-48 w-full object-cover" />
    <div className="p-4">
      <h3 className="mb-2 font-semibold text-gray-900">{name}</h3>
      <p className="text-lg font-bold text-blue-600">{price}</p>
    </div>
  </div>
);

// Sample slide data
const imageSlides: CarouselSlide[] = [
  {
    id: 1,
    content: (
      <ImageSlide
        src="/images/moutain_landscape.jpeg"
        alt="Mountain landscape"
        title="Mountain Adventure"
      />
    ),
    metadata: { category: "nature", featured: true },
  },
  {
    id: 2,
    content: (
      <ImageSlide
        src="/images/forest_path.jpeg"
        alt="Forest path"
        title="Forest Trail"
      />
    ),
    metadata: { category: "nature" },
  },
  {
    id: 3,
    content: (
      <ImageSlide
        src="/images/ocean_waves.jpg"
        alt="Ocean waves"
        title="Ocean Waves"
      />
    ),
    metadata: { category: "nature" },
  },
  {
    id: 4,
    content: (
      <ImageSlide
        src="/images/desert_sunset.jpg"
        alt="Desert sunset"
        title="Desert Sunset"
      />
    ),
    metadata: { category: "nature" },
  },
];

const contentSlides: CarouselSlide[] = [
  {
    id: 1,
    content: (
      <ContentSlide
        title="Welcome to Our Platform"
        description="Discover amazing features and capabilities"
        color="bg-gradient-to-r from-blue-500 to-purple-600"
      />
    ),
  },
  {
    id: 2,
    content: (
      <ContentSlide
        title="Powerful Analytics"
        description="Get insights that drive your business forward"
        color="bg-gradient-to-r from-green-500 to-teal-600"
      />
    ),
  },
  {
    id: 3,
    content: (
      <ContentSlide
        title="Seamless Integration"
        description="Connect with your favorite tools and services"
        color="bg-gradient-to-r from-orange-500 to-red-600"
      />
    ),
  },
];

const productSlides: CarouselSlide[] = [
  {
    id: 1,
    content: (
      <ProductCard
        name="Wireless Headphones"
        price="$199.99"
        image="/images/wireless_headphones.jpeg"
      />
    ),
  },
  {
    id: 2,
    content: (
      <ProductCard
        name="Smart Watch"
        price="$299.99"
        image="/images/smart_watch.jpeg"
      />
    ),
  },
  {
    id: 3,
    content: (
      <ProductCard
        name="Laptop Stand"
        price="$79.99"
        image="/images/computer_mouse.jpeg"
      />
    ),
  },
  {
    id: 4,
    content: (
      <ProductCard
        name="Desk Organizer"
        price="$49.99"
        image="/images/desk_organizer.jpeg"
      />
    ),
  },
];

const videoSlides: CarouselSlide[] = [
  {
    id: 1,
    content: (
      <div className="relative h-64 w-full overflow-hidden rounded-lg bg-black">
        <video
          className="size-full object-cover"
          poster="/images/netflix_thumbnail.jpeg"
          controls
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <h3 className="text-lg font-semibold text-white">Product Demo</h3>
        </div>
      </div>
    ),
    metadata: { type: "video", duration: "2:30" },
  },
  {
    id: 2,
    content: (
      <div className="flex h-64 flex-col items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 p-8 text-center text-white">
        <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-white/20">
          <svg className="size-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <h2 className="mb-2 text-xl font-bold">Interactive Tutorial</h2>
        <p className="text-sm opacity-90">Learn our platform in 5 minutes</p>
      </div>
    ),
    metadata: { type: "interactive", category: "tutorial" },
  },
];

const testimonialSlides: CarouselSlide[] = [
  {
    id: 1,
    content: (
      <div className="h-64 rounded-lg border border-gray-200 bg-white p-8 shadow-lg">
        <div className="flex h-full flex-col justify-between">
          <blockquote className="text-lg italic leading-relaxed text-gray-600">
            &quot;This component has revolutionized how we display content. The
            flexibility and ease of use is incredible!&quot;
          </blockquote>
          <div className="mt-6 flex items-center">
            <img
              src="/images/sarah_johnson.jpeg"
              alt="Sarah Johnson"
              className="mr-4 size-12 rounded-full"
            />
            <div>
              <div className="font-semibold text-gray-900">Sarah Johnson</div>
              <div className="text-sm text-gray-500">Frontend Developer</div>
            </div>
          </div>
        </div>
      </div>
    ),
    metadata: { rating: 5, role: "developer" },
  },
  {
    id: 2,
    content: (
      <div className="h-64 rounded-lg border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
        <div className="flex h-full flex-col justify-between">
          <blockquote className="text-lg italic leading-relaxed text-gray-700">
            &quot;The accessibility features and keyboard navigation make this
            perfect for our enterprise application.&quot;
          </blockquote>
          <div className="mt-6 flex items-center">
            <img
              src="/images/mike_chen.jpeg"
              alt="Mike Chen"
              className="mr-4 size-12 rounded-full"
            />
            <div>
              <div className="font-semibold text-gray-900">Mike Chen</div>
              <div className="text-sm text-gray-500">UX Designer</div>
            </div>
          </div>
        </div>
      </div>
    ),
    metadata: { rating: 5, role: "designer" },
  },
];

const featureSlides: CarouselSlide[] = [
  {
    id: 1,
    content: (
      <div className="h-64 rounded-lg bg-gradient-to-br from-green-400 to-blue-500 p-6 text-white">
        <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-white/20">
          <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
        <h3 className="mb-2 text-xl font-bold">Accessibility First</h3>
        <p className="text-white/90">
          Built with ARIA support, keyboard navigation, and screen reader
          announcements
        </p>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="h-64 rounded-lg bg-gradient-to-br from-purple-400 to-pink-500 p-6 text-white">
        <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-white/20">
          <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        </div>
        <h3 className="mb-2 text-xl font-bold">Highly Customizable</h3>
        <p className="text-white/90">
          Extensive theming options, custom renderers, and flexible
          configuration
        </p>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className="h-64 rounded-lg bg-gradient-to-br from-orange-400 to-red-500 p-6 text-white">
        <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-white/20">
          <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" />
          </svg>
        </div>
        <h3 className="mb-2 text-xl font-bold">Performance Optimized</h3>
        <p className="text-white/90">
          Lazy loading, virtualization support, and efficient rendering
        </p>
      </div>
    ),
  },
];

const meta: Meta<typeof InteractiveCarousel> = {
  title: "Interactive/Interactive Carousel",
  component: InteractiveCarousel,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A comprehensive, highly customizable carousel component built for modern React applications. Perfect for image galleries, product showcases, testimonials, feature highlights, and more.

## ✨ Key Features

- **🎯 Fully Accessible** - WCAG compliant with ARIA support, keyboard navigation, and screen reader announcements
- **📱 Responsive Design** - Adaptive layouts with configurable breakpoints
- **🎨 Extensive Theming** - Dark/light themes, custom colors, and complete style control
- **⚡ Performance Optimized** - Lazy loading, virtualization support, and efficient rendering
- **🔧 Highly Configurable** - 50+ options for complete customization
- **🎮 Interactive Controls** - Touch/swipe support, drag & drop, keyboard navigation
- **🎭 Multiple Variants** - Navigation styles, indicator types, and layout options
- **📊 Event Handling** - Comprehensive callback system for all interactions
- **🎬 Auto-play Support** - Smart auto-play with pause/resume functionality
- **🔄 Infinite Loop** - Seamless infinite scrolling option
- **🎯 Center Mode** - Highlight active slides with partial adjacent views
- **📐 Flexible Sizing** - From compact to full-screen layouts
- **🎨 Custom Renderers** - Complete control over slide and navigation rendering
- **⚠️ Error Handling** - Built-in loading and error states
- **🧪 TypeScript Ready** - Full type safety and IntelliSense support

## 🚀 Usage Examples

The component supports various use cases from simple image galleries to complex product showcases. Check out the stories below to see different configurations and capabilities.
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    slides: {
      description: "Array of slide objects containing content and metadata",
      control: false,
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl", "full"],
      description: "Overall size of the carousel container",
    },
    navigation: {
      description: "Navigation configuration or boolean to enable/disable",
      control: false,
    },
    indicators: {
      description: "Indicator configuration or boolean to enable/disable",
      control: false,
    },
    options: {
      description: "Carousel behavior options",
      control: false,
    },
    className: {
      control: "text",
      description: "Additional CSS classes for the carousel container",
    },
    contentClassName: {
      control: "text",
      description: "Additional CSS classes for the carousel content",
    },
    onSlideChange: {
      action: "slide-changed",
      description: "Callback fired when slide changes",
    },
    onSlideClick: {
      action: "slide-clicked",
      description: "Callback fired when a slide is clicked",
    },
  },
  args: {
    // Define all callback functions as spies
    onSlideChange: fn(),
    onSlideClick: fn(),
    onBeforeSlideChange: fn(),
    onAfterSlideChange: fn(),
    onAutoPlayStart: fn(),
    onAutoPlayStop: fn(),
    onDragStart: fn(),
    onDragEnd: fn(),
    onSwipeStart: fn(),
    onSwipeEnd: fn(),
    onFocus: fn(),
    onBlur: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof InteractiveCarousel>;

// ==== BASIC STORIES ====

export const Default: Story = {
  args: {
    slides: imageSlides,
    size: "lg",
    navigation: true,
    indicators: true,
  },
};

export const ContentCarousel: Story = {
  args: {
    slides: contentSlides,
    size: "lg",
    navigation: true,
    indicators: true,
  },
};

export const ProductShowcase: Story = {
  args: {
    slides: productSlides,
    size: "lg",
    navigation: true,
    indicators: true,
    options: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
    },
  },
};

// ==== SIZE VARIATIONS ====

export const SmallSize: Story = {
  args: {
    slides: contentSlides,
    size: "sm",
    navigation: true,
    indicators: true,
  },
};

export const FullWidth: Story = {
  args: {
    slides: imageSlides,
    size: "full",
    navigation: true,
    indicators: true,
  },
  parameters: {
    layout: "fullscreen",
  },
};

// ==== NAVIGATION VARIANTS ====

export const MinimalNavigation: Story = {
  args: {
    slides: imageSlides,
    size: "lg",
    navigation: {
      variant: "minimal",
      size: "lg",
    },
    indicators: true,
  },
};

export const RoundedNavigation: Story = {
  args: {
    slides: imageSlides,
    size: "lg",
    navigation: {
      variant: "rounded",
      size: "md",
    },
    indicators: true,
  },
};

export const NoNavigation: Story = {
  args: {
    slides: imageSlides,
    size: "lg",
    navigation: false,
    indicators: true,
  },
};

// ==== INDICATOR VARIANTS ====

export const LineIndicators: Story = {
  args: {
    slides: imageSlides,
    size: "lg",
    navigation: true,
    indicators: {
      variant: "lines",
      position: "bottom",
      alignment: "center",
    },
  },
};

export const NumberIndicators: Story = {
  args: {
    slides: imageSlides,
    size: "lg",
    navigation: true,
    indicators: {
      variant: "numbers",
      position: "bottom",
      alignment: "center",
    },
  },
};

export const TopIndicators: Story = {
  args: {
    slides: imageSlides,
    size: "lg",
    navigation: true,
    indicators: {
      variant: "dots",
      position: "top",
      alignment: "center",
    },
  },
};

export const NoIndicators: Story = {
  args: {
    slides: imageSlides,
    size: "lg",
    navigation: true,
    indicators: false,
  },
};

// ==== AUTO-PLAY EXAMPLES ====

export const AutoPlay: Story = {
  args: {
    slides: imageSlides,
    size: "lg",
    navigation: true,
    indicators: true,
    options: {
      autoPlay: true,
      autoPlayInterval: 2000,
      pauseOnHover: true,
      infinite: true,
    },
  },
};

export const AutoPlayFast: Story = {
  args: {
    slides: contentSlides,
    size: "lg",
    navigation: true,
    indicators: true,
    options: {
      autoPlay: true,
      autoPlayInterval: 1000,
      pauseOnHover: false,
      infinite: true,
    },
  },
};

// ==== MULTIPLE SLIDES ====

export const MultipleSlides: Story = {
  args: {
    slides: productSlides,
    size: "xl",
    navigation: true,
    indicators: true,
    options: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
    },
  },
};

export const ThreeSlides: Story = {
  args: {
    slides: [...productSlides, ...productSlides], // Duplicate for more slides
    size: "full",
    navigation: true,
    indicators: true,
    options: {
      slidesToShow: 3,
      slidesToScroll: 2,
      infinite: true,
    },
  },
  parameters: {
    layout: "fullscreen",
  },
};

// ==== ADVANCED FEATURES ====

export const VideoMediaCarousel: Story = {
  args: {
    slides: videoSlides,
    size: "lg",
    navigation: {
      variant: "floating",
      size: "lg",
      position: "overlay",
    },
    indicators: {
      variant: "dots",
      position: "bottom",
    },
    options: {
      autoPlay: false, // Don't auto-play with video content
      pauseOnHover: true,
      draggable: true,
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Carousel optimized for video and interactive media content with overlay navigation.",
      },
    },
  },
};

export const TestimonialCarousel: Story = {
  args: {
    slides: testimonialSlides,
    size: "lg",
    navigation: {
      variant: "minimal",
      size: "md",
      position: "outside",
    },
    indicators: {
      variant: "lines",
      position: "bottom",
      alignment: "center",
    },
    options: {
      autoPlay: true,
      autoPlayInterval: 3000,
      pauseOnHover: true,
      infinite: true,
      transition: "fade",
      transitionDuration: 100,
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Perfect for displaying customer testimonials with fade transitions and auto-play.",
      },
    },
  },
};

export const FeatureHighlights: Story = {
  args: {
    slides: featureSlides,
    size: "lg",
    navigation: true,
    indicators: {
      variant: "numbers",
      position: "bottom",
      alignment: "center",
    },
    options: {
      centerMode: true,
      infinite: true,
      focusOnSelect: true,
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Showcase product features with center mode and focus selection.",
      },
    },
  },
};

export const CustomStyling: Story = {
  args: {
    slides: imageSlides,
    size: "lg",
    className: "shadow-2xl rounded-2xl overflow-hidden",
    contentClassName: "gap-4",
    navigation: {
      variant: "rounded",
      size: "lg",
      className: "shadow-lg",
    },
    indicators: {
      variant: "dots",
      position: "bottom",
      alignment: "center",
      className: "p-4",
      activeClassName: "bg-red-500 scale-125",
      inactiveClassName: "bg-gray-400 hover:bg-gray-500",
    },
  },
};

export const NonInfinite: Story = {
  args: {
    slides: imageSlides,
    size: "lg",
    navigation: true,
    indicators: true,
    options: {
      infinite: false,
      draggable: true,
    },
  },
};

export const NonDraggable: Story = {
  args: {
    slides: imageSlides,
    size: "lg",
    navigation: true,
    indicators: true,
    options: {
      draggable: false,
      infinite: true,
    },
  },
};

// ==== RESPONSIVE & LAYOUT EXAMPLES ====

export const ResponsiveCarousel: Story = {
  args: {
    slides: productSlides.concat(productSlides), // More slides for better demo
    size: "full",
    navigation: true,
    indicators: true,
    options: {
      slidesToShow: 4,
      slidesToScroll: 2,
      infinite: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    },
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story:
          "Responsive carousel that adapts slides count based on screen size. Resize your browser to see the effect.",
      },
    },
  },
};

export const CenterModeCarousel: Story = {
  args: {
    slides: imageSlides,
    size: "xl",
    navigation: {
      variant: "rounded",
      size: "lg",
      position: "outside",
    },
    indicators: true,
    options: {
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      focusOnSelect: true,
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Center mode displays the active slide prominently with partial views of adjacent slides.",
      },
    },
  },
};

// ==== ACCESSIBILITY & INTERACTION ====

export const KeyboardNavigationDemo: Story = {
  args: {
    slides: contentSlides,
    size: "lg",
    navigation: true,
    indicators: true,
    options: {
      keyboard: true,
      focusOnSelect: true,
      announceSlideChanges: true,
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates keyboard navigation. Use Arrow Keys (←/→), Home/End, and Spacebar to control the carousel.",
      },
    },
  },
};

export const AccessibilityFocused: Story = {
  args: {
    slides: featureSlides,
    size: "lg",
    navigation: {
      variant: "default",
      size: "lg",
      ariaLabels: {
        previous: "Go to previous feature",
        next: "Go to next feature",
      },
    },
    indicators: {
      variant: "dots",
      position: "bottom",
      ariaLabel: "Feature navigation",
    },
    "aria-label": "Product features carousel",
    "aria-describedby": "carousel-description",
    options: {
      keyboard: true,
      announceSlideChanges: true,
      focusOnSelect: true,
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Accessibility-focused carousel with custom ARIA labels and screen reader support.",
      },
    },
  },
};

// ==== ADVANCED STYLING & THEMING ====

export const DarkThemeCarousel: Story = {
  args: {
    slides: imageSlides,
    size: "lg",
    className: "bg-gray-900 p-6 rounded-lg",
    navigation: {
      variant: "outline",
      size: "lg",
      className: "border-white text-white hover:bg-white hover:text-gray-900",
    },
    indicators: {
      variant: "dots",
      position: "bottom",
      activeClassName: "bg-white",
      inactiveClassName: "bg-gray-600 hover:bg-gray-400",
    },
    theme: {
      colors: {
        primary: "#ffffff",
        secondary: "#6b7280",
        background: "#1f2937",
        foreground: "#ffffff",
        border: "#374151",
        accent: "#3b82f6",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Dark theme carousel with custom colors and styling.",
      },
    },
  },
};

export const CustomRendererExample: Story = {
  args: {
    slides: productSlides,
    size: "lg",
    navigation: true,
    indicators: true,
    renderSlide: (slide, index, isActive) => (
      <div
        className={`transition-all duration-300 ${isActive ? "scale-105" : "scale-95 opacity-70"}`}
      >
        {slide.content}
        <div className="mt-2 text-center">
          <span
            className={`rounded px-2 py-1 text-xs ${isActive ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-600"}`}
          >
            Slide {index + 1}
          </span>
        </div>
      </div>
    ),
    renderNavigation: ({
      canGoNext,
      canGoPrevious,
      goToNext,
      goToPrevious,
    }) => (
      <div className="flex gap-2">
        <button
          onClick={goToPrevious}
          disabled={!canGoPrevious}
          className="rounded-full bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600 disabled:opacity-50"
        >
          ← Prev
        </button>
        <button
          onClick={goToNext}
          disabled={!canGoNext}
          className="rounded-full bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600 disabled:opacity-50"
        >
          Next →
        </button>
      </div>
    ),
    options: {
      slidesToShow: 1,
      infinite: false,
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Custom slide and navigation renderers for complete control over appearance.",
      },
    },
  },
};

// ==== PERFORMANCE & OPTIMIZATION ====

export const LazyLoadingCarousel: Story = {
  args: {
    slides: [...imageSlides, ...imageSlides, ...imageSlides], // Triple slides for demo
    size: "lg",
    navigation: true,
    indicators: true,
    options: {
      lazyLoad: true,
      preloadSlides: 2,
      infinite: true,
      autoPlay: true,
      autoPlayInterval: 3000,
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Optimized for performance with lazy loading and slide preloading.",
      },
    },
  },
};

// ==== INTERACTIVE EXAMPLES ====

export const WithCallbacks: Story = {
  args: {
    slides: imageSlides,
    size: "lg",
    navigation: true,
    indicators: true,
    onSlideChange: (index, slide) => {
      console.log("Slide changed:", { index, slide });
    },
    onSlideClick: (slide, index) => {
      console.log("Slide clicked:", { slide, index });
      alert(
        `Clicked slide ${index + 1}: ${slide.metadata?.category || "Unknown"}`
      );
    },
  },
};

// ==== ERROR STATES & EDGE CASES ====

export const SingleSlide: Story = {
  args: {
    slides: [imageSlides[0]],
    size: "lg",
    navigation: true,
    indicators: true,
  },
};

export const LoadingState: Story = {
  args: {
    slides: [],
    size: "lg",
    loading: true,
    loadingComponent: (
      <div className="flex h-64 flex-col items-center justify-center space-y-4">
        <div className="size-12 animate-spin rounded-full border-4 border-blue-200 border-t-blue-500" />
        <p className="text-gray-600">Loading amazing content...</p>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Custom loading state with spinner and message.",
      },
    },
  },
};

export const EmptySlides: Story = {
  args: {
    slides: [],
    size: "lg",
    navigation: true,
    indicators: true,
  },
};

export const ErrorState: Story = {
  args: {
    slides: [],
    size: "lg",
    error: "Failed to load carousel content",
    errorComponent: (
      <div className="flex h-64 flex-col items-center justify-center space-y-4 text-red-500">
        <CircleX className="size-12 text-current" viewBox="0 0 24 24" />
        <div className="text-center">
          <p className="font-semibold">Oops! Something went wrong</p>
          <p className="mt-1 text-sm text-gray-500">
            Please try refreshing the page
          </p>
        </div>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Custom error state with icon and helpful message.",
      },
    },
  },
};
