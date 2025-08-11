import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Globe, Rocket, Phone, MessageCircle, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  project: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      project: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly at CognitionSync@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 navy-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Collaborate?</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Whether you're a startup, agency, or enterprise, if you're looking to solve a problem with tech — we'd love to help.
          </p>
          
          {/* Quick Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a 
              href="mailto:CognitionSync@gmail.com" 
              className="inline-flex items-center px-6 py-3 bg-professional-blue hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </a>
            <a 
              href="tel:+15551234567" 
              className="inline-flex items-center px-6 py-3 bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold rounded-lg transition-all duration-300 border border-white border-opacity-30"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center px-6 py-3 bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold rounded-lg transition-all duration-300 border border-white border-opacity-30"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book a Slot
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
            <div className="space-y-6">
              <a 
                href="mailto:CognitionSync@gmail.com" 
                className="flex items-center group hover:bg-white hover:bg-opacity-10 p-3 rounded-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-professional-blue bg-opacity-20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-professional-blue group-hover:bg-opacity-30">
                  <Mail className="text-professional h-6 w-6 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-slate-300 text-sm group-hover:text-white">Email us</div>
                  <div className="text-white font-semibold">CognitionSync@gmail.com</div>
                </div>
              </a>
              
              <a 
                href="tel:+15551234567" 
                className="flex items-center group hover:bg-white hover:bg-opacity-10 p-3 rounded-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-professional-blue bg-opacity-20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-professional-blue group-hover:bg-opacity-30">
                  <Phone className="text-professional h-6 w-6 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-slate-300 text-sm group-hover:text-white">Call us</div>
                  <div className="text-white font-semibold">+1 (555) 123-4567</div>
                </div>
              </a>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="flex items-center group hover:bg-white hover:bg-opacity-10 p-3 rounded-lg transition-all duration-300 w-full text-left"
              >
                <div className="w-12 h-12 bg-professional-blue bg-opacity-20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-professional-blue group-hover:bg-opacity-30">
                  <MessageCircle className="text-professional h-6 w-6 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-slate-300 text-sm group-hover:text-white">Live chat</div>
                  <div className="text-white font-semibold">Available 9 AM - 6 PM EST</div>
                </div>
              </button>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="flex items-center group hover:bg-white hover:bg-opacity-10 p-3 rounded-lg transition-all duration-300 w-full text-left"
              >
                <div className="w-12 h-12 bg-professional-blue bg-opacity-20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-professional-blue group-hover:bg-opacity-30">
                  <Calendar className="text-professional h-6 w-6 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-slate-300 text-sm group-hover:text-white">Book a consultation</div>
                  <div className="text-white font-semibold">Free 30-min strategy call</div>
                </div>
              </button>
              
              <div className="flex items-center group p-3 rounded-lg opacity-60">
                <div className="w-12 h-12 bg-professional-blue bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                  <Globe className="text-professional h-6 w-6" />
                </div>
                <div>
                  <div className="text-slate-300 text-sm">Website</div>
                  <div className="text-white font-semibold">Coming Soon</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-navy mb-6">Start Your Project</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Company" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="project"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="web-development">Web Development</SelectItem>
                          <SelectItem value="ai-solutions">AI Solutions</SelectItem>
                          <SelectItem value="browser-extensions">Browser Extensions</SelectItem>
                          <SelectItem value="automation-services">Automation Services</SelectItem>
                          <SelectItem value="cloud-devops">Cloud & DevOps</SelectItem>
                          <SelectItem value="saas-microservices">SaaS & Microservices</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message *</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={4} 
                          placeholder="Tell us about your project..." 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full bg-professional-blue text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
