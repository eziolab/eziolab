import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-gradient py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-professional-blue font-semibold text-sm uppercase tracking-wide mb-4">
              FOCUSED ON YOUR SUCCESS
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-navy leading-tight mb-6">
              AI-Powered Digital Innovation Lab Building
              <span className="text-professional-blue"> Scalable Solutions</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              CognitionSync transforms complex problems into elegant digital solutions. We specialize in AI-powered applications, custom development, and intelligent automation that drives real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-professional-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300 shadow-lg"
                size="lg"
              >
                Start Your Project
              </Button>
              <Button 
                onClick={() => scrollToSection('projects')}
                variant="outline"
                className="border border-professional-blue text-professional-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-professional-blue hover:text-white transition duration-300"
                size="lg"
              >
                View Our Work
              </Button>
            </div>
            <div className="flex items-center space-x-6 text-sm text-slate-600">
              <div className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                <span>CognitionSync@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Modern digital innovation workspace" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-success rounded-full"></div>
                <span className="text-sm font-medium text-slate-700">AI Solutions Active</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="text-professional-blue">🚀</div>
                <span className="text-sm font-medium text-slate-700">50+ Projects Delivered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
