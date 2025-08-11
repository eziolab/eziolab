import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-navy">CognitionSync </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-navy font-medium hover:text-professional-blue transition duration-300"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-slate-600 hover:text-professional-blue transition duration-300"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-slate-600 hover:text-professional-blue transition duration-300"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className="text-slate-600 hover:text-professional-blue transition duration-300"
              >
                Process
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-slate-600 hover:text-professional-blue transition duration-300"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-professional-blue text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
            >
              Start Your Project
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-navy font-medium hover:text-professional-blue transition duration-300 text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-slate-600 hover:text-professional-blue transition duration-300 text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-slate-600 hover:text-professional-blue transition duration-300 text-left"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className="text-slate-600 hover:text-professional-blue transition duration-300 text-left"
              >
                Process
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-slate-600 hover:text-professional-blue transition duration-300 text-left"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-professional-blue text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-300 w-full mt-4"
              >
                Start Your Project
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
