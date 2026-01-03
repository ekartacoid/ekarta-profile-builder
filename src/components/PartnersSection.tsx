const PartnersSection = () => {
  const partners = [
    { name: "Telkom Indonesia", logo: "https://www.telkom.co.id/minio/show/data/image_upload/page/1594108255409_compress_logo%20telkom%20indonesia.png" },
    { name: "Telkom Akses", logo: "https://images.seeklogo.com/logo-png/34/2/telkom-akses-logo-png_seeklogo-340460.png" },
    { name: "Indosat", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Indosat_Ooredoo_logo_%282019%29.svg/2560px-Indosat_Ooredoo_logo_%282019%29.svg.png" },
    { name: "Sawang Architect", logo: "https://cdn.projects.co.id/upload/usr183217/201808215b7b874e3dc5e.jpg" },
    { name: "Simetriline", logo: null },
    { name: "JKS Net", logo: "https://www.jks.co.id/wp-content/uploads/2020/01/Logo-jks-merah.png" },
    { name: "PT. Inter Medialink Solusi", logo: "https://my.apjii.or.id/uploads/real/2254/logo_perusahaan2.png" },
  ];

  return (
    <section id="mitra" className="section-padding bg-muted/50">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4">
            Mitra & Klien
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Dipercaya oleh Berbagai Perusahaan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami bangga telah bermitra dengan perusahaan-perusahaan terkemuka di Indonesia
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mt-6" />
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 flex items-center justify-center min-h-[120px] group animate-scale-in"
              style={{ opacity: 0, animationDelay: `${0.05 * index}s` }}
            >
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                />
              ) : (
                <span className="font-semibold text-muted-foreground group-hover:text-foreground transition-colors text-center">
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-primary/5 border border-primary/10">
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Terpercaya oleh</p>
              <p className="text-2xl font-bold text-foreground">50+ Perusahaan</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Pengalaman</p>
              <p className="text-2xl font-bold text-foreground">8+ Tahun</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
