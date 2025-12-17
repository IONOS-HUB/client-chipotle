import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

// Styles for FAQ animation
const styles = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out forwards;
  }
`;

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "¿Hacen envíos a domicilio?",
            answer: "¡Sí! Contamos con servicio de entrega propio en toda la ciudad. También nos encuentras en las principales apps de delivery."
        },
        {
            question: "¿Tienen opciones vegetarianas?",
            answer: "Claro que sí. Nuestra 'Ensalada Especial' y los tacos de vegetales asados son favoritos incluso entre los carnívoros."
        },
        {
            question: "¿Se requiere reservación?",
            answer: "Para grupos grandes (más de 6 personas) recomendamos reservar, especialmente los fines de semana. Para parejas o grupos pequeños, ¡solo ven!"
        },
        {
            question: "¿Aceptan tarjetas de crédito?",
            answer: "Aceptamos todas las tarjetas de crédito y débito, transferencias y efectivo."
        },
        {
            question: "¿Tienen parqueadero?",
            answer: "Sí, contamos con parqueadero privado y seguro para nuestros clientes justo al lado del restaurante."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-stone-100">
            <style>{styles}</style>
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-12">
                    <div
                        className="inline-flex items-center justify-center p-3 bg-red-100 rounded-full mb-4"
                        data-aos="zoom-in"
                    >
                        <HelpCircle className="text-red-600 w-8 h-8" />
                    </div>
                    <h2
                        className="font-mexican text-3xl md:text-5xl text-gray-900 mb-4"
                        data-aos="fade-up"
                    >
                        Preguntas Frecuentes
                    </h2>
                    <p
                        className="text-gray-600"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        Todo lo que necesitas saber antes de tu visita.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 ${openIndex === index ? 'border-red-500 shadow-lg' : 'border-stone-200 hover:border-red-300'}`}
                            data-aos="fade-up"
                            data-aos-delay={200 + (index * 100)}
                        >
                            <button
                                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-inset rounded-t-2xl transition-all hover:bg-stone-50"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <span className={`font-bold text-lg ${openIndex === index ? 'text-red-700' : 'text-stone-800'}`}>
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <ChevronUp className="text-red-500 flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="text-stone-400 flex-shrink-0" />
                                )}
                            </button>

                            {openIndex === index && (
                                <div
                                    id={`faq-answer-${index}`}
                                    className="px-6 pb-6 animate-fadeIn"
                                    role="region"
                                >
                                    <p className="text-stone-600 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
