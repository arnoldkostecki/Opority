"use client";

import { Card, CardContent } from "@/components/ui/card";

interface Benefit {
  emoji: string;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    emoji: "🎯",
    title: "Campaign Setup & Audit",
    description:
      "In the first week, we review your current presence, install tracking onto your site, and set up campaigns the right way. If you already have ads running, we'll audit them and make improvements.",
  },
  {
    emoji: "✨",
    title: "Creative Testing & Optimisation",
    description:
      "We create multiple ad variations (images, videos, and copywriting) and test them with your audience. By the end of the month, you'll know which ads resonate and where your best ROI comes from.",
  },
  {
    emoji: "📊",
    title: "Clear Communication, Reporting & Transparent Costs",
    description:
      "You'll have direct contact with us, plus weekly updates that break down performance in plain English. You'll know how much was spent, what results came in, and what's planned next. You only pay for management + your ad spend.",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 dark:bg-purple-500/10 bg-blue-500/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 dark:bg-pink-500/10 bg-cyan-500/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16 animate-slide-up">
          <div className="inline-block mb-4 sm:mb-5">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
              Your benefits
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 sm:mb-5 leading-tight">
            What you can expect in{" "}
            <span className="dark:text-gradient-purple text-gradient-blue">
              30 days
            </span>{" "}
            of Advertising on Facebook
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => {
            return (
              <Card
                key={index}
                className="group relative bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 transform hover:scale-[1.02] animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 sm:p-7 lg:p-8 flex flex-col h-full">
                  {/* Emoji - Centered */}
                  <div className="flex justify-center mb-5 sm:mb-6">
                    <span className="text-5xl sm:text-6xl transition-all duration-300 group-hover:scale-110">
                      {benefit.emoji}
                    </span>
                  </div>

                  {/* Title Container - Fixed height for alignment */}
                  <div className="mb-3 sm:mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 text-center">
                      {benefit.title}
                    </h3>
                  </div>

                  {/* Description Container - Flex grow to fill space */}
                  <div className="flex-grow">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-center">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
