import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Internet Broadband",
    "Fiber To The Building",
    "Interior Design",
    "Furniture Custom",
    "Construction",
    "Architecture",
  ];

  const quickLinks = [
    { label: "Tentang Kami", href: "#tentang" },
    { label: "Layanan", href: "#layanan" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Mitra", href: "#mitra" },
    { label: "Kontak", href: "#kontak" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom mx-auto section-padding pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="EJB Logo" className="h-10 w-auto" />
              <span className="font-bold text-lg">Ekarta Java Buana</span>
            </div>
            <p className="text-background/70 mb-6 leading-relaxed">
              Penyedia layanan terintegrasi dalam bidang konstruksi, interior design, 
              arsitektur, furniture custom, dan telekomunikasi.
            </p>
            <div className="flex items-center gap-3 text-sm text-background/70">
              <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
              <span>Winong, Jaten, Karanganyar, Jawa Tengah</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Layanan</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#layanan"
                    className="text-background/70 hover:text-secondary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Tautan Cepat</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Kontak</h4>
            <div className="space-y-4">
              <a
                href="mailto:mustofa@ekarta.co.id"
                className="flex items-center gap-3 text-background/70 hover:text-secondary transition-colors"
              >
                <Mail className="w-5 h-5 text-secondary" />
                mustofa@ekarta.co.id
              </a>
              <a
                href="https://wa.me/6281357515354"
                className="flex items-center gap-3 text-background/70 hover:text-secondary transition-colors"
              >
                <Phone className="w-5 h-5 text-secondary" />
                +62 813-5751-5354
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-background/10 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
          <p>© {currentYear} PT. Ekarta Java Buana. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span className="text-secondary">Bridging Innovation</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
