import React from 'react';

export default function FaqSection() {
  const faqs = [
    {
      q: "What is Tech Resource Hub?",
      a: "It is a specialized hub built to help IT & Technology undergraduates easily find curated code snippets, tutorials, and development boilerplates."
    },
    {
      q: "Is it free to use?",
      a: "Yes! All resources and guides provided on this platform are completely free for students and developers."
    }
  ];

  return (
    <section className="py-20 bg-neutral-950">
      <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
        <h2 className="text-3xl font-extrabold text-white mb-3">Frequently Asked Questions</h2>
        <p className="text-neutral-400 mb-10 text-sm">Got questions? We've got answers.</p>

        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div key={index} className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800/80">
              <h4 className="text-lg font-bold text-white mb-2">{faq.q}</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}