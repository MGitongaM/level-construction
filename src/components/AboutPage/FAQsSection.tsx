import { faqsEntries } from "@/staticData/AboutPage/FAQsData";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";


export default function FAQsSection() {
  return (
    <section className="h-full">
        <div className="container mx-auto px-4 py-40 space-y-6">
            <div className="flex flex-wrap md:flex-nowrap justify-evenly items-center gap-8">
                <div className="w-full md:w-6/12 text-center space-y-4">
                    <h3 className="text-3xl font-semibold">Frequent Asked Questons</h3>
                    <p className="leading-8">Find answers to common questions about our construction services</p>

                </div>
                <Accordion type="single" collapsible className="w-full md:w-6/12">
                    {faqsEntries.map((entry)=>(
                        <AccordionItem key={entry.id} value={entry.id.toString()}>
                            <AccordionTrigger className="hover:no-underline hover:cursor-pointer font-semibold">{entry.title}</AccordionTrigger>
                            <AccordionContent>{entry.content}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

            </div>
        </div>
    </section>
  )
}
