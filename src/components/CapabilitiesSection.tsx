import { Wrench, Cpu, Cog, Box } from "lucide-react";

const CapabilitiesSection = () => {
  const machines = [
    { name: "Planer Machine", description: "Mesin perata permukaan kayu" },
    { name: "Table Saw", description: "Gergaji meja presisi tinggi" },
    { name: "Bandsaw", description: "Gergaji pita untuk potongan kurva" },
    { name: "Jointer", description: "Mesin penyambung kayu" },
    { name: "Mortiser", description: "Mesin pembuat lubang mortise" },
  ];

  const capabilities = [
    {
      icon: Wrench,
      title: "Workshop Lengkap",
      description: "Fasilitas workshop dengan mesin-mesin modern untuk produksi furniture berkualitas tinggi.",
    },
    {
      icon: Cpu,
      title: "System Integration",
      description: "Kemampuan integrasi sistem telekomunikasi dan IT untuk solusi enterprise.",
    },
    {
      icon: Cog,
      title: "Custom Manufacturing",
      description: "Produksi custom sesuai spesifikasi dan kebutuhan unik setiap klien.",
    },
    {
      icon: Box,
      title: "End-to-End Solution",
      description: "Layanan menyeluruh dari desain, produksi, hingga instalasi.",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4">
            Kapabilitas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Kemampuan Teknis Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Didukung oleh peralatan modern dan tim profesional berpengalaman
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Machines List */}
          <div className="bg-card rounded-3xl p-8 shadow-card animate-fade-in-left" style={{ opacity: 0 }}>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Wrench className="w-5 h-5 text-primary" />
              </div>
              Peralatan Produksi
            </h3>
            <div className="space-y-4">
              {machines.map((machine, index) => (
                <div
                  key={machine.name}
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{machine.name}</h4>
                    <p className="text-sm text-muted-foreground">{machine.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="grid sm:grid-cols-2 gap-6 animate-fade-in-right" style={{ opacity: 0 }}>
            {capabilities.map((cap, index) => (
              <div
                key={cap.title}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-secondary/10 flex items-center justify-center mb-4 transition-colors">
                  <cap.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{cap.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
