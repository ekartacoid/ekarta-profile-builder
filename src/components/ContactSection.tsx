import { MapPin, Mail, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Alamat",
      value: "Winong, Jaten, Karanganyar, Jawa Tengah",
      href: "https://maps.google.com/?q=Winong,Jaten,Karanganyar",
    },
    {
      icon: Mail,
      label: "Email",
      value: "mustofa@ekarta.co.id",
      href: "mailto:mustofa@ekarta.co.id",
    },
    {
      icon: Phone,
      label: "Telepon / WhatsApp",
      value: "+62 813-5751-5354",
      href: "https://wa.me/6281357515354",
    },
  ];

  return (
    <section id="kontak" className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Orange Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container-custom mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-left" style={{ opacity: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground font-semibold text-sm mb-6">
              Hubungi Kami
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Siap Memulai Proyek Anda?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              Tim kami siap membantu mewujudkan kebutuhan konstruksi, interior, 
              furniture, dan telekomunikasi Anda. Hubungi kami untuk konsultasi gratis.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/30 transition-colors">
                    <info.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/60 mb-1">{info.label}</p>
                    <p className="font-semibold">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="hero"
                size="lg"
                onClick={() => window.open("https://wa.me/6281357515354", "_blank")}
              >
                <MessageCircle className="w-5 h-5" />
                Chat via WhatsApp
              </Button>
              <Button variant="heroOutline" size="lg">
                Kirim Email
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right - Map or Image */}
          <div className="animate-fade-in-right" style={{ opacity: 0 }}>
            <div className="bg-primary-foreground/10 rounded-3xl p-2 backdrop-blur-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.9724!2d110.8625!3d-7.5725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMzQnMjEuMCJTIDExMMKwNTEnNDUuMCJF!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: "1.25rem" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi PT Ekarta Java Buana"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
