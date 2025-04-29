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
    <>
      <div className="bg-white">
        <div className="container mx-auto space-y-16 px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
          <div className="text-center">
            <div className="mb-1 text-sm font-bold tracking-wider text-indigo-600 uppercase">
              We Answer
            </div>
            <h2 className="text-4xl font-black text-black">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mx-auto max-w-2xl">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-7">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="text-center">
            <Button>
              <span>Go to support center</span>
              <ArrowUpRightFromSquare className="size-5 opacity-50" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;