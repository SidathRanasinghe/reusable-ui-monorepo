import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

// Import components for demos
import { CircularGauge } from "@core/circular-gauge";
import { AccordionSelector, SelectionState } from "@core/accordion-selector";
import { InteractiveCarousel } from "@core/interactive-carousel";
import { Button } from "@ui/button";
import { Badge } from "@ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@ui/card";
import { NetworkGraph } from "@/index";

import { accordionGroups, sampleSlides } from "./common/constants";
import { generateLinks, generateNodes } from "./common/utils";

const WelcomeComponent = () => {
  const [selectedAccordion, setSelectedAccordion] = useState<SelectionState>({
    database_users: true,
    permissions_read: true,
  });
  const [expanded, setExpanded] = useState<string[]>(["database"]);

  return (
    <div className="mx-auto max-w-6xl space-y-12 p-8">
      {/* Header Section */}
      <div className="space-y-6 text-center">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100">
            Reusable UI Component Library
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            A collection of production-ready React components built with modern
            tools and best practices
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary">React 18</Badge>
          <Badge variant="secondary">TypeScript</Badge>
          <Badge variant="secondary">Tailwind CSS</Badge>
          <Badge variant="secondary">Radix UI</Badge>
          <Badge variant="secondary">Storybook</Badge>
        </div>
      </div>

      {/* Quick Overview Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🎯 Accessibility First
            </CardTitle>
            <CardDescription>
              WCAG compliant with ARIA support, keyboard navigation, and screen
              reader compatibility
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🎨 Highly Customizable
            </CardTitle>
            <CardDescription>
              Extensive theming options, custom renderers, and flexible
              configuration for every use case
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              ⚡ Performance Optimized
            </CardTitle>
            <CardDescription>
              Lazy loading, virtualization support, and efficient rendering for
              smooth user experiences
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Component Showcase */}
      <div className="space-y-8">
        <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
          Component Showcase
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Circular Gauge Demo */}
          <Card>
            <CardHeader>
              <CardTitle>Circular Gauge</CardTitle>
              <CardDescription>
                Animated progress indicator with customizable styling
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <CircularGauge
                value={850}
                min={0}
                max={1000}
                label="Total Rate"
                unit=""
                variant="success"
                animated
                tickConfig={{
                  majorInterval: 5,
                  majorLength: 2,
                  minorLength: 0.8,
                  showLabels: true,
                  labelFormatter: value => `${(value / 1000).toFixed(1)}K`,
                }}
                valueFormatter={val => `$${Math.round(val)}`}
                size={200}
              />
            </CardContent>
          </Card>

          {/* Interactive Carousel Demo */}
          <Card>
            <CardHeader>
              <CardTitle>Network Graph</CardTitle>
              <CardDescription>
                Responsive network graph with minimap, zoom controls, and custom
                nodes/links shapes support
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[calc(100vh-150px)] overflow-hidden">
              <NetworkGraph
                nodes={generateNodes(25)}
                links={generateLinks(25)}
              />
            </CardContent>
          </Card>

          {/* Accordion Selector Demo */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Accordion Selector</CardTitle>
              <CardDescription>
                Interactive accordion with single or multiple selection modes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AccordionSelector
                groups={accordionGroups}
                selectedItems={selectedAccordion}
                onSelectionChange={newSelection =>
                  setSelectedAccordion(newSelection)
                }
                expandedItems={expanded}
                onExpandedChange={newExpanded => setExpanded(newExpanded)}
              />
            </CardContent>
          </Card>

          {/* Interactive Carousel Demo */}
          <Card>
            <CardHeader>
              <CardTitle>Interactive Carousel</CardTitle>
              <CardDescription>
                Responsive carousel with navigation, indicators, and swipe
                support
              </CardDescription>
            </CardHeader>
            <CardContent>
              <InteractiveCarousel
                slides={sampleSlides}
                navigation={true}
                indicators={true}
                options={{
                  autoPlay: true,
                  autoPlayInterval: 3000,
                  pauseOnHover: true,
                }}
              />
            </CardContent>
          </Card>

          {/* Accordion Selector Demo */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Accordion Selector</CardTitle>
              <CardDescription>
                Interactive accordion with single or multiple selection modes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AccordionSelector
                groups={accordionGroups}
                selectedItems={selectedAccordion}
                onSelectionChange={newSelection =>
                  setSelectedAccordion(newSelection)
                }
                expandedItems={expanded}
                onExpandedChange={newExpanded => setExpanded(newExpanded)}
              />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Available Components Grid */}
      <div className="space-y-6">
        <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
          Available Components
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Interactive Components */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                🎮 Interactive Components
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <p className="text-sm font-medium">Accordion Selector</p>
                <p className="text-xs text-muted-foreground">
                  Interactive accordion-style selector
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Interactive Carousel</p>
                <p className="text-xs text-muted-foreground">
                  Feature-rich carousel with navigation
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Dynamic Form</p>
                <p className="text-xs text-muted-foreground">
                  Configurable form generator
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">WYSIWYG Editor</p>
                <p className="text-xs text-muted-foreground">
                  Rich text editing with toolbar
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Data Visualization */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">📊 Data Visualization</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <p className="text-sm font-medium">Circular Gauge</p>
                <p className="text-xs text-muted-foreground">
                  Circular progress indicator
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Data Grid</p>
                <p className="text-xs text-muted-foreground">
                  Feature-rich data table
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Network Graph</p>
                <p className="text-xs text-muted-foreground">
                  Interactive network visualization
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Metrics Chart</p>
                <p className="text-xs text-muted-foreground">
                  Performance metrics display
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Layout & Navigation */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">🧭 Layout & Navigation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <p className="text-sm font-medium">Advanced Stepper</p>
                <p className="text-xs text-muted-foreground">
                  Multi-step process indicator
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Tab Content Selector</p>
                <p className="text-xs text-muted-foreground">
                  Dynamic tab-based content
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Vertical Timeline</p>
                <p className="text-xs text-muted-foreground">
                  Timeline with status indicators
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Progress Timeline</p>
                <p className="text-xs text-muted-foreground">
                  Step-by-step progress display
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Getting Started Section */}
      <Card className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20">
        <CardHeader>
          <CardTitle className="text-2xl text-blue-900 dark:text-blue-100">
            🚀 Getting Started
          </CardTitle>
          <CardDescription className="text-blue-800 dark:text-blue-200">
            Explore the components in the sidebar to see detailed examples,
            documentation, and interactive demos
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border border-blue-200 bg-white p-4 dark:border-blue-700 dark:bg-gray-800">
            <h3 className="mb-3 font-medium text-gray-900 dark:text-gray-100">
              Monorepo Structure:
            </h3>
            <div className="grid gap-2 md:grid-cols-3">
              <div className="space-y-1">
                <code className="rounded bg-gray-100 px-2 py-1 text-sm dark:bg-gray-700">
                  packages/ui-core
                </code>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Core component library
                </p>
              </div>
              <div className="space-y-1">
                <code className="rounded bg-gray-100 px-2 py-1 text-sm dark:bg-gray-700">
                  packages/tailwind-config
                </code>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Shared Tailwind config
                </p>
              </div>
              <div className="space-y-1">
                <code className="rounded bg-gray-100 px-2 py-1 text-sm dark:bg-gray-700">
                  stories/
                </code>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Storybook documentation
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button variant="default">Browse Components</Button>
            <Button variant="outline">View Documentation</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const meta: Meta<typeof WelcomeComponent> = {
  title: "Welcome",
  component: WelcomeComponent,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
# Reusable UI Component Library

A comprehensive collection of production-ready React components built with modern tools and best practices. This library provides a solid foundation for building consistent, accessible, and performant user interfaces.

## Features

- **🎯 Accessibility First** - All components follow WCAG guidelines with proper ARIA support
- **🎨 Highly Customizable** - Extensive theming and configuration options  
- **⚡ Performance Optimized** - Built for efficiency with lazy loading and virtualization
- **📱 Responsive Design** - Mobile-first approach with adaptive layouts
- **🔧 TypeScript Ready** - Full type safety and excellent developer experience
- **🧪 Well Tested** - Comprehensive test coverage and Storybook documentation

## Browse Components

Use the sidebar navigation to explore all available components with interactive examples and detailed documentation.
        `,
      },
    },
    options: {
      showPanel: false, // Hide the controls panel for the welcome page
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const HomePage: Story = {
  name: "Component Library Home",
};
