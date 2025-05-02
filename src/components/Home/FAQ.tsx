'use client'
import { ArrowUpRightFromSquare } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqItems from "@/constant/faq.json";
import { Button } from "../ui/button";

const FAQ = () => {
  return (
    <section id="faq" className="container py-24">
      <div className="mx-auto space-y-16 max-w-5xl">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find answers to common questions about our laundry service. Can&apos;t find what you&apos;re looking for? Visit our support center.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-border/50"
              >
                <AccordionTrigger className="text-left text-lg hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Support Center Button */}
        <div className="text-center">
          <Button
            size="lg"
            className="group"
          >
            <span>Visit Support Center</span>
            <ArrowUpRightFromSquare className="ml-2 h-4 w-4 opacity-70 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;