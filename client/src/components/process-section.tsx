const processSteps = [
  {
    number: "1",
    title: "Discovery & Planning",
    description: "Understanding requirements, defining scope, and creating detailed project roadmap."
  },
  {
    number: "2",
    title: "Design & Architecture",
    description: "Creating user-centered designs and robust technical architecture for scalability."
  },
  {
    number: "3",
    title: "Development & Testing",
    description: "Agile development with continuous testing and quality assurance throughout."
  },
  {
    number: "4",
    title: "Deployment & Support",
    description: "Smooth deployment with ongoing support and maintenance for optimal performance."
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">Our Development Process</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From concept to deployment, we follow a proven methodology that ensures successful project delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-16 h-16 bg-professional-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">{step.number}</span>
              </div>
              <h3 className="text-lg font-bold text-navy mb-3">{step.title}</h3>
              <p className="text-slate-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Professional team collaboration" 
            className="rounded-2xl shadow-xl w-full max-w-4xl mx-auto h-auto"
          />
        </div>
      </div>
    </section>
  );
}
