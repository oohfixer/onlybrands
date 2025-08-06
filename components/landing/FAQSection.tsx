// FAQSection.tsx
import React from 'react';
import FAQItem from './FAQItem';

function FAQSection() {
  const faqItems = [
    {
      question: "What prevents fake or inflated bids?",
      answer: "Our platform includes bid validation, influencer reputation scoring, and historical performance data. Brands can see past campaign results and authentic engagement metrics before selecting winners."
    },
    {
      question: "How does the reverse bidding model benefit brands?",
      answer: "Brands save time on discovery, get competitive pricing through market forces, and receive multiple creative proposals. Instead of cold outreach, motivated influencers come to you with tailored pitches."
    },
    {
      question: "What's the advantage for influencers?",
      answer: "Influencers discover relevant opportunities faster, set their own rates, and compete on value rather than follower count alone. They can build long-term relationships with quality brands actively seeking partnerships."
    },
    {
      question: "How does payment and escrow work?",
      answer: "All payments are secured through our escrow system. Funds are held safely until campaign deliverables are met, protecting both brands and influencers throughout the collaboration process."
    },
    {
      question: "What happens if campaign results don't meet expectations?",
      answer: "We have built-in performance guarantees and milestone-based payments. If agreed-upon metrics aren't met, our dispute resolution process ensures fair outcomes for all parties."
    }
  ];

  return (
    <section className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="section-content">
        <div className="fade-in" style={{ 
          textAlign: 'center', 
          marginBottom: '60px' 
        }}>
          <h2 style={{ 
            fontSize: '48px', 
            fontWeight: '800', 
            marginBottom: '30px' 
          }}>
            Frequently Asked Questions
          </h2>
          <p style={{ 
            fontSize: '20px', 
            color: 'var(--text-secondary)', 
            maxWidth: '800px', 
            margin: '0 auto' 
          }}>
            Everything you need to know about how OnlyBrands revolutionizes influencer marketing.
          </p>
        </div>
        
        <div className="faq-container">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;