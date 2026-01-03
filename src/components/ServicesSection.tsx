import {
  Wifi,
  Building,
  Radio,
  Sofa,
  Palette,
  PenTool,
  HardHat,
  MonitorSmartphone,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Wifi,
      title: "Internet Broadband",
      description:
        "Layanan koneksi internet berkecepatan tinggi untuk kebutuhan residensial dan komersial.",
      benefits: ["Kecepatan Stabil", "Dukungan 24/7", "Coverage Luas"],
    },
    {
      icon: Building,
      title: "Fiber To The Building (FTTB)",
      description:
        "Solusi jaringan fiber optik terintegrasi untuk gedung perkantoran dan apartemen.",
      benefits: ["Bandwidth Tinggi", "Instalasi Profesional", "Maintenance Support"],
    },
    {
      icon: Radio,
      title: "In Building System",
      description:
        "Sistem distribusi sinyal komunikasi dalam gedung untuk memastikan konektivitas optimal.",
      benefits: ["Signal Coverage", "Multi-operator", "Scalable Solution"],
    },
    {
      icon: Sofa,
      title: "Furniture Custom",
      description:
        "Pembuatan furniture berkualitas sesuai desain dan kebutuhan spesifik klien.",
      benefits: ["Desain Kustom", "Material Premium", "Workmanship Terjamin"],
    },
    {
      icon: Palette,
      title: "Interior Design",
      description:
        "Layanan desain interior profesional untuk menciptakan ruang yang fungsional dan estetis.",
      benefits: ["Konsep Unik", "3D Visualization", "Turnkey Solution"],
    },
    {
      icon: PenTool,
      title: "Architectural Design",
      description:
        "Perancangan arsitektur modern dengan pendekatan sustainable dan inovatif.",
      benefits: ["Desain Inovatif", "Struktural Engineering", "Perizinan Support"],
    },
    {
      icon: HardHat,
      title: "Construction Services",
      description:
        "Jasa konstruksi komprehensif dari perencanaan hingga penyelesaian proyek.",
      benefits: ["Project Management", "Quality Control", "Tepat Waktu"],
    },
    {
      icon: MonitorSmartphone,
      title: "Smart Queueing System",
      description:
        "Sistem antrian digital cerdas untuk meningkatkan efisiensi layanan pelanggan.",
      benefits: ["Digital Display", "Mobile Integration", "Analytics Dashboard"],
    },
  ];

  return (
    <section id="layanan" className="section-padding bg-background">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4">
            Layanan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Solusi Terintegrasi untuk Kebutuhan Anda
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan profesional dengan standar kualitas tinggi
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-slide-up"
              style={{ opacity: 0, animationDelay: `${0.05 * index}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/5 group-hover:bg-secondary/10 flex items-center justify-center mb-5 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap gap-2">
                {service.benefits.map((benefit) => (
                  <span
                    key={benefit}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                  >
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
