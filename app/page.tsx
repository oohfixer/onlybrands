'use client';

import { useState } from 'react';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import ProblemSection from '@/components/landing/ProblemSection';
import SolutionSection from '@/components/landing/SolutionSection';
import MarketSection from '@/components/landing/MarketSection';
import FAQSection from '@/components/landing/FAQSection';
import FinalCTA from '@/components/landing/FinalCTA';
import Modal from '@/components/landing/Modal';

export default function LandingPage() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'contact' | 'early-access' | 'investment';
  }>({
    isOpen: false,
    type: 'contact'
  });

  const handleModalOpen = (type: 'contact' | 'early-access' | 'investment') => {
    setModalState({
      isOpen: true,
      type
    });
  };

  const handleModalClose = () => {
    setModalState({
      ...modalState,
      isOpen: false
    });
  };

  return (
    <div className="min-h-screen bg-surface-primary">
      {/* Header Component - includes Logo, Navigation, Mobile Menu */}
      <Header onModalOpen={handleModalOpen} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section - includes StatDisplay, DemoFrame, HeroDemo */}
        <Hero onModalOpen={handleModalOpen} />

        {/* Problem Section - includes ProblemCard components */}
        <ProblemSection onModalOpen={handleModalOpen} />

        {/* Solution Section - includes SolutionDemo, DemoFrame */}
        <SolutionSection onModalOpen={handleModalOpen} />

        {/* Market Section - includes MarketStatCard components */}
        <MarketSection onModalOpen={handleModalOpen} />

        {/* FAQ Section - includes FAQItem components */}
        <FAQSection />

        {/* Final CTA Section - includes SecondaryButton */}
        <FinalCTA onModalOpen={handleModalOpen} />
      </main>

      {/* Modal Component - handles ContactForm, EarlyAccessForm, InvestmentForm */}
      <Modal
        isOpen={modalState.isOpen}
        onClose={handleModalClose}
        type={modalState.type}
      />


    </div>
  );
}
