import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>PT. Ekarta Java Buana | Konstruksi, Interior, Telekomunikasi</title>
        <meta
          name="description"
          content="PT. Ekarta Java Buana - Penyedia layanan terintegrasi dalam bidang konstruksi, interior design, arsitektur, furniture custom, dan telekomunikasi di Jawa Tengah."
        />
        <meta
          name="keywords"
          content="konstruksi, interior design, arsitektur, furniture custom, telekomunikasi, internet broadband, FTTB, Karanganyar, Jawa Tengah"
        />
        <link rel="canonical" href="https://ekarta.co.id" />
        
        {/* Open Graph */}
        <meta property="og:title" content="PT. Ekarta Java Buana | Bridging Innovation" />
        <meta
          property="og:description"
          content="Penyedia layanan terintegrasi dalam bidang konstruksi, interior design, arsitektur, furniture custom, dan telekomunikasi."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="id_ID" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "PT. Ekarta Java Buana",
            description: "Penyedia layanan terintegrasi dalam bidang konstruksi, interior design, arsitektur, furniture custom, dan telekomunikasi",
            url: "https://ekarta.co.id",
            email: "mustofa@ekarta.co.id",
            telephone: "+6281357515354",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Karanganyar",
              addressRegion: "Jawa Tengah",
              addressCountry: "ID",
            },
            sameAs: [],
          })}
        </script>
      </Helmet>

      <main className="overflow-hidden">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <VisionMissionSection />
        <ServicesSection />
        <PortfolioSection />
        <CapabilitiesSection />
        <PartnersSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
