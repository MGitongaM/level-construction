import { faqsEntries } from "@/staticData/AboutPage/FAQsData";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";


export default function FAQsSection() {
  return (
    <section className="h-full">
        <div className="container mx-auto px-4 py-10">
            <div className="max-w-2xl mx-auto">
                <h3 className="text-3xl font-semibold">Frequent Asked Questons</h3>
                <p className="leading-8">Find answers to common questions about our construction services</p>

            </div>
            <Accordion type="single" collapsible>
                {faqsEntries.map((entry)=>(
                    <AccordionItem key={entry.id} value={entry.id.toString()}>
                        <AccordionTrigger>{entry.title}</AccordionTrigger>
                        <AccordionContent>{entry.content}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    </section>
  )
}
