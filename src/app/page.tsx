
import GrowBussiness from '@/components/homeComponent/GrowBussiness';
import HeroSection from '@/components/homeComponent/HeroSection';
import HowWeDo from '@/components/homeComponent/HowWeDo';
import TrustedPartner from '@/components/homeComponent/TrustedPartner';
import WhatWeDo from '@/components/homeComponent/WhatWeDo';
import React from 'react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* What We Do Section */}
      <WhatWeDo />

      {/* Our Trusted Partners Section */}
      <TrustedPartner />

      {/* Grow Your Business Section */}
      <GrowBussiness />

      {/* How We Do It Section */}
      <HowWeDo />

    </div>
  );
}