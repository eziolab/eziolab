import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

import ServicesSection from "./components/services-section";
import AutomationServices from "./components/services/automation-services";
// import WebDevelopment from "./components/services/web-development";
// import AISolutions from "./components/services/ai-solutions";
// import BrowserExtensions from "./components/services/browser-extensions";
// import CloudDevOps from "./components/services/cloud-devops";
// import SaaSMicroservices from "./components/services/saas-microservices";


function Router() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/services/automation-services" component={AutomationServices} />
      {/* <Route path="/services/web-development" component={WebDevelopment} />
      <Route path="/services/ai-solutions" component={AISolutions} />
      <Route path="/services/browser-extensions" component={BrowserExtensions} />
      <Route path="/services/cloud-devops" component={CloudDevOps} />
      <Route path="/services/saas-microservices" component={SaaSMicroservices} /> */}


      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
