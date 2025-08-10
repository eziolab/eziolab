import { Wand2, Palette, Workflow, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    icon: Wand2,
    title: "AI-Enhanced Productivity Extension",
    description: "Browser extension with AI-powered features for enhanced productivity workflows.",
    status: "In Development",
    gradient: "from-professional-blue to-blue-600"
  },
  {
    icon: Palette,
    title: "Smart Portfolio Website Builder",
    description: "Intelligent website builder with AI-powered design suggestions and optimization.",
    status: "In Development",
    gradient: "from-success to-green-600"
  },
  {
    icon: Workflow,
    title: "Workflow Automation Templates",
    description: "Pre-built automation templates specifically designed for agencies and businesses.",
    status: "In Development",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Code,
    title: "Open-Source Microservices",
    description: "Internal tools made public as open-source microservices for the community.",
    status: "Coming Soon",
    gradient: "from-purple-500 to-indigo-600"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">Projects Underway</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Stay tuned — we are actively developing innovative solutions and tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div 
                key={project.title} 
                className={`project-card bg-gradient-to-br ${project.gradient}`}
              >
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="text-white h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-white/90 text-sm mb-4">{project.description}</p>
                <Badge variant="secondary" className="bg-white/20 text-white text-xs">
                  {project.status}
                </Badge>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
