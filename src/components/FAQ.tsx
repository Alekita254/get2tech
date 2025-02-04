import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is Alex Murimi?",
    answer: "Alex Murimi (or Ghetto Tech) is a movement focused on providing tech solutions and opportunities for underserved communities, empowering innovation from the grassroots up.",
    value: "item-1",
  },
  {
    question: "How can I be part of Alex Murimi?",
    answer: "You can join our community by following our social media, attending workshops, or contributing your skills to our open projects.",
    value: "item-2",
  },
  {
    question: "What kind of projects does Alex Murimi work on?",
    answer: "We develop innovative tech solutions in AI, software development, and hardware automation to address real-world challenges, particularly for marginalized communities.",
    value: "item-3",
  },
  {
    question: "Do I need coding skills to join?",
    answer: "No! While coding is a plus, we also welcome designers, marketers, project managers, and anyone passionate about tech and innovation.",
    value: "item-4",
  },
  {
    question: "How can I support Alex Murimi?",
    answer: "You can support us by collaborating on projects, spreading awareness, or providing resources such as mentorship, funding, or hardware donations.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
      <section
          id="faq"
          className="container py-24 sm:py-32"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Frequently Asked{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
        </h2>

        <Accordion
            type="single"
            collapsible
            className="w-full AccordionRoot"
        >
          {FAQList.map(({ question, answer, value }: FAQProps) => (
              <AccordionItem
                  key={value}
                  value={value}
              >
                <AccordionTrigger className="text-left">
                  {question}
                </AccordionTrigger>

                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
          ))}
        </Accordion>

        <h3 className="font-medium mt-4">
          Still have questions?{" "}
          <a
              rel="noreferrer noopener"
              href="#"
              className="text-primary transition-all border-primary hover:border-b-2"
          >
            Contact us
          </a>
        </h3>
      </section>
  );
};
