import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-navy py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-3xl font-bold text-white mb-4">CognitionSync </div>
          <p className="text-slate-400 mb-6">
            Empowering businesses with cutting-edge digital solutions that are fast, scalable, and intelligent.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="#" 
              className="text-slate-400 hover:text-professional-blue transition duration-300"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-slate-400 hover:text-professional-blue transition duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-slate-400 hover:text-professional-blue transition duration-300"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6" />
            </a>
          </div>
          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-400 text-sm">
              © 2024 CognitionSync. All rights reserved. | Transforming ideas into intelligent digital solutions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
