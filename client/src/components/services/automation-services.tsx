import { Badge } from "@/components/ui/badge";
import { Workflow, Zap, Settings, LucideIcon, Github, ExternalLink, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

type AutomationProject = {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
};

const automationProjects: AutomationProject[] = [
  {
    icon: Workflow,
    title: "Lead Capture Workflow",
    description: "Automatically capture leads from forms and send them to CRM via n8n.",
    tags: ["n8n", "CRM", "Automation"],
    image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_ITO_Ps_5a5aac3fda.webp",
    github: "https://github.com/atique-ahmad-ch/vote-automation-bot",
    demo: "https://demo.leadcapture.com",
  },
  {
    icon: Zap,
    title: "Zapier Task Sync",
    description: "Sync tasks between Trello and Google Calendar automatically.",
    tags: ["Zapier", "Google", "Trello"],
    image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/merge_loop_filter_fd9aa5bb51.webp",
    github: "https://github.com/yourname/zapier-task-sync",
  },
  {
    icon: Settings,
    title: "Custom API Automation",
    description: "Custom scripts to integrate third-party APIs for seamless data transfer.",
    tags: ["APIs", "Python", "Webhooks"],
    image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/merge_loop_filter_fd9aa5bb51.webp",
    github: "https://github.com/yourname/api-automation",
    demo: "https://demo.apiautomation.com",
  },
];

export default function AutomationServices() {
  const [, navigate] = useLocation();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="mb-6 flex items-center text-professional-blue font-semibold hover:underline"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
        </button>

        <h1 className="text-4xl font-bold text-navy mb-6">Automation Services</h1>
        <p className="text-lg text-slate-600 mb-12">
          Explore automation workflows built with <strong>n8n, Zapier, and custom scripts</strong>
          to optimize business processes and save time.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {automationProjects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition flex flex-col"
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl mb-4 w-full h-40 object-cover"
                />

                {/* Icon + Title */}
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mr-3">
                    <Icon className="text-orange-500 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy">{project.title}</h3>
                </div>

                {/* Description */}
                <p className="text-slate-600 mb-3 flex-grow">{project.description}</p>

                {/* Tags */}
                <div className="flex gap-2 flex-wrap mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-slate-700 hover:text-black"
                    >
                      <Github className="w-5 h-5 mr-1" /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-professional-blue hover:underline"
                    >
                      <ExternalLink className="w-5 h-5 mr-1" /> Demo
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
