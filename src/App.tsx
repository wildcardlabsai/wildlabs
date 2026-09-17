/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, LegalModalType } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';

import { HomePage } from './pages/HomePage';
import { WhatWeAutomatePage } from './pages/WhatWeAutomatePage';
import { SolutionsPage } from './pages/SolutionsPage';
import { AIEmployeesPage } from './pages/AIEmployeesPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { AboutPage } from './pages/AboutPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ContactPage } from './pages/ContactPage';
import { PricingPage } from './pages/PricingPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [activeLegalModal, setActiveLegalModal] = useState<LegalModalType | null>(null);
  const [selectedPricingTier, setSelectedPricingTier] = useState<string | undefined>(undefined);

  // Scroll to top on page change
  const handleNavigate = (page: PageId, tierName?: string) => {
    if (tierName) {
      setSelectedPricingTier(tierName);
    } else if (page !== 'contact') {
      setSelectedPricingTier(undefined);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col bg-[#090b0e] text-[#f4f4f2] selection:bg-[#a3e635] selection:text-[#090b0e] bg-grid-pattern relative">
      {/* Global Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={(page) => handleNavigate(page)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'what-we-automate' && <WhatWeAutomatePage onNavigate={handleNavigate} />}
        {currentPage === 'solutions' && <SolutionsPage onNavigate={handleNavigate} />}
        {currentPage === 'ai-employees' && <AIEmployeesPage onNavigate={handleNavigate} />}
        {currentPage === 'how-it-works' && <HowItWorksPage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'resources' && <ResourcesPage onNavigate={handleNavigate} />}
        {currentPage === 'pricing' && <PricingPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            selectedTier={selectedPricingTier}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLegal={(type) => setActiveLegalModal(type)}
      />

      {/* Legal Information Modal */}
      <LegalModal
        type={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />
    </div>
  );
}

