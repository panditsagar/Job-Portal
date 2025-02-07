import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Hirrd?",
    answer:
      "Hirrd is a Job Portal Application allows companies to post job listings and users to search and apply for jobs. It provides features for both job seekers and employers, with user-friendly interfaces and secure authentication.",
  },
  {
    question: "How do I post a job?",
    answer:
      "As an employer, you can post a job by navigating to the 'Post Job' section after logging in. Fill in the job details and submit the form to create a new job listing.",
  },
  {
    question: "How can I search for jobs?",
    answer:
      "Job seekers can search for jobs by keywords, location, category, and other filters using the search bar on the homepage or the dedicated job search page.",
  },
  {
    question: "How do I apply for a job?",
    answer:
      "To apply for a job, click on the job listing and follow the application instructions provided. You may need to upload your resume and provide additional information.",
  },
  {
    question: "Can I save jobs to apply later?",
    answer:
      "Yes, you can save job listings by clicking the 'Save Job' button on the job listing. Saved jobs can be accessed from your profile under the 'Saved Jobs' section.",
  },
  {
    question: "How do I track my job applications?",
    answer:
      "Job seekers can track the status of their applications from the 'Applications' section in their profile. This section provides updates on the progress of each application.",
  },
];
function Faqs() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="text-gray-900 text-4xl my-5 mb-10 ">
        Frequently Asked Questions (FAQs)
      </h1>
      <Accordion type="multiple" className="w-full text-black px-28 mb-10 ">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger  className="text-lg font-semibold">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-lg text-gray-900">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default Faqs;
