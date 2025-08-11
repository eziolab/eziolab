import { Settings, Brain, Zap, Puzzle, GitBranch, Users } from "lucide-react";

const features = [
  {
    icon: Settings,
    title: "End-to-End Product Development",
    description: "Complete product lifecycle management from conception to deployment and maintenance.",
    color: "text-professional-blue",
    bgColor: "bg-professional-blue/10"
  },
  {
    icon: Brain,
    title: "Deep AI/ML Expertise",
    description: "Advanced artificial intelligence and machine learning capabilities for intelligent solutions.",
    color: "text-success",
    bgColor: "bg-success/10"
  },
  {
    icon: Zap,
    title: "Rapid Automation Deployment",
    description: "Quick implementation of automation solutions that deliver immediate value.",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10"
  },
  {
    icon: Puzzle,
    title: "Modular & Extensible Design",
    description: "Flexible architecture that grows with your business needs and requirements.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10"
  },
  {
    icon: GitBranch,
    title: "Open Source & Private Projects",
    description: "Experience with both open source contributions and confidential enterprise projects.",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10"
  },
  {
    icon: Users,
    title: "Dedicated Client Support",
    description: "Ongoing collaboration and support throughout the entire project lifecycle.",
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10"
  }
];

export default function WhyChooseSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">Why Choose CognitionSync?</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We empower businesses with cutting-edge digital solutions that are fast, scalable, and intelligent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.title} className="text-center">
                <div className={`w-20 h-20 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <IconComponent className={`${feature.color} h-8 w-8`} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
