import { Building2, Award, Users, Target } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Building2, value: "150+", label: "Proyek Selesai" },
    { icon: Users, value: "50+", label: "Klien Puas" },
    { icon: Award, value: "8+", label: "Tahun Pengalaman" },
    { icon: Target, value: "100%", label: "Komitmen Kualitas" },
  ];

  return (
    <section id="tentang" className="section-padding bg-background">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4">
            Tentang Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            PT. Ekarta Java Buana
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in-left" style={{ opacity: 0, animationDelay: "0.1s" }}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">PT. Ekarta Java Buana</strong> adalah perusahaan 
              berbadan hukum Perseroan Terbatas yang didirikan dengan visi menjadi 
              penyedia layanan terintegrasi yang terpercaya di Indonesia.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Berkantor pusat di Winong, Jaten, Karanganyar, Jawa Tengah, kami 
              menyediakan solusi menyeluruh dalam bidang <strong className="text-foreground">konstruksi, 
              interior design, arsitektur, furniture custom,</strong> serta 
              <strong className="text-foreground"> telekomunikasi dan layanan internet.</strong>
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dengan tim profesional dan berpengalaman, kami berkomitmen untuk 
              menghadirkan hasil kerja berkualitas tinggi yang memenuhi kebutuhan 
              dan ekspektasi setiap klien.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in-right" style={{ opacity: 0, animationDelay: "0.2s" }}>
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <stat.icon className="w-7 h-7 text-secondary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
