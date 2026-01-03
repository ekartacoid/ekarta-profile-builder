import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const PortfolioSection = () => {
  const categories = ["Semua", "Furniture", "Interior", "Arsitektur", "Konstruksi"];
  const [activeCategory, setActiveCategory] = useState("Semua");

  const projects = [
    {
      id: 1,
      title: "Custom Office Furniture",
      category: "Furniture",
      description: "Pembuatan furniture kantor custom dengan material berkualitas",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Modern Living Room Interior",
      category: "Interior",
      description: "Desain interior ruang tamu dengan konsep modern minimalis",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      title: "Residential Architecture",
      category: "Arsitektur",
      description: "Perancangan arsitektur hunian modern dan sustainable",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop",
    },
    {
      id: 4,
      title: "Vertical Garden Installation",
      category: "Konstruksi",
      description: "Pembangunan vertical garden untuk area komersial",
      image: "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?w=600&h=400&fit=crop",
    },
    {
      id: 5,
      title: "Kitchen Cabinet Design",
      category: "Furniture",
      description: "Desain dan pembuatan kitchen cabinet custom",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    },
    {
      id: 6,
      title: "Commercial Space Interior",
      category: "Interior",
      description: "Interior desain ruang komersial dengan konsep industrial",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    },
  ];

  const filteredProjects =
    activeCategory === "Semua"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-muted/50">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Proyek yang Telah Kami Kerjakan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lihat beberapa hasil karya kami di berbagai bidang layanan
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mt-6" />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 animate-scale-in"
              style={{ opacity: 0, animationDelay: `${0.1 * index}s` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="heroOutline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Lihat Detail
                  </Button>
                </div>
                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Lihat Semua Proyek
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
