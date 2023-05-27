import React, { useState } from "react";
import { faqStyles } from "../styles";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqData = [
    {
      question: "Que es Nivles Fit?",
      answer: "Un programa muy bonito de progreso.",
    },
    {
      question: "Que es la calistenia?",
      answer: "Trabajo con nuestro peso corporal.",
    },
    {
      question: "Que significa el blanco?",
      answer: "Eres color blanco.",
    },
    {
      question: "Que significa el verde?",
      answer: "Eres color verde.",
    },
    {
      question: "Que significa el amarillo?",
      answer: "Eres color amarillo.",
    },
    {
      question: "Que significa el azul?",
      answer: "Eres color azul.",
    },
    {
      question: "Que significa el rojo?",
      answer: "Eres color rojo.",
    },
    {
      question: "Que significa BPM?",
      answer: "Best Progress Method.",
    },
    // Add more FAQ data as needed
  ];

  return (
    <div className={faqStyles["faq-accordion"]}>
      {faqData.map((item, index) => (
        <div
          className={`${faqStyles["faq-item"]} ${
            index === activeIndex ? faqStyles.active : ""
          }`}
          key={index}
          onClick={() => toggleAccordion(index)}
        >
          <div className={faqStyles["faq-question"]}>{item.question}</div>
          {index === activeIndex && (
            <div className={faqStyles["faq-answer"]}>{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
