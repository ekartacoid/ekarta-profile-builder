import { Eye, Target, CheckCircle } from "lucide-react";

const VisionMissionSection = () => {
  const missions = [
    "Menyediakan layanan terintegrasi berkualitas tinggi dalam bidang konstruksi, interior, dan telekomunikasi",
    "Mengutamakan kepuasan pelanggan melalui hasil kerja yang profesional dan tepat waktu",
    "Membangun kemitraan jangka panjang dengan klien, mitra, dan stakeholder",
    "Berinovasi secara berkelanjutan untuk memberikan solusi terbaik",
    "Berkontribusi dalam pembangunan infrastruktur dan ekonomi daerah",
  ];

  return (
    <section className="section-padding bg-muted/50">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Vision Card */}
          <div className="bg-primary rounded-3xl p-8 lg:p-10 text-primary-foreground relative overflow-hidden animate-scale-in" style={{ opacity: 0 }}>
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-48 h-48 opacity-10">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="80" cy="20" r="40" fill="currentColor" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">Visi Kami</h3>
              <p className="text-xl lg:text-2xl font-semibold text-secondary mb-4">
                "Bridging Innovation"
              </p>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                Menjadi jembatan inovasi yang menghubungkan kebutuhan klien dengan 
                solusi terbaik di bidang konstruksi, desain, dan teknologi telekomunikasi 
                di Indonesia.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-card rounded-3xl p-8 lg:p-10 shadow-card animate-scale-in" style={{ opacity: 0, animationDelay: "0.15s" }}>
            <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">Misi Kami</h3>
            <ul className="space-y-4">
              {missions.map((mission, index) => (
                <li key={index} className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">{mission}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
