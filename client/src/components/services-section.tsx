import { Code, Brain, Puzzle, Bot, Cloud, Boxes } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Responsive, performant, and secure websites and portals tailored to business needs with modern technologies.",
    tags: ["React", "Node.js", "Next.js"],
    color: "text-professional-blue",
    bgColor: "bg-professional-blue/10"
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Machine learning models, natural language processing, and intelligent systems for smarter workflows.",
    tags: ["ML Models", "NLP", "Computer Vision"],
    color: "text-success",
    bgColor: "bg-success/10"
  },
  {
    icon: Puzzle,
    title: "Browser Extensions",
    description: "Custom Chrome/Firefox extensions that enhance productivity and add valuable integrations.",
    tags: ["Chrome", "Firefox", "WebExtensions"],
    color: "text-purple-500",
    bgColor: "bg-purple-500/10"
  },
  {
    icon: Bot,
    title: "Automation Services",
    description: "Workflow automation using tools like n8n, Zapier, custom scripts, and APIs to reduce manual work.",
    tags: ["n8n", "Zapier", "APIs"],
    color: "text-orange-500",
    bgColor: "bg-orange-500/10"
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure, CI/CD pipelines, and containerized deployment for reliability and performance.",
    tags: ["AWS", "Docker", "CI/CD"],
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10"
  },
  {
    icon: Boxes,
    title: "SaaS & Microservices",
    description: "Modular, reusable service components for faster delivery of full-stack applications and digital tools.",
    tags: ["Microservices", "SaaS", "APIs"],
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">
            Comprehensive Digital Innovation Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From AI-powered solutions to custom development, we deliver scalable, intelligent, and efficient services across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.title} className="service-card group">
                <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                  <IconComponent className={`${service.color} h-8 w-8`} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <button className="text-professional-blue font-semibold hover:underline group-hover:translate-x-1 transition-transform duration-300">
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
