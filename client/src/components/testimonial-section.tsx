import { Quote } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">Success Stories</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See what our clients say about partnering with CognitionSync for their digital innovation needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-slate-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-professional-blue rounded-full flex items-center justify-center mr-4">
                  <Quote className="text-white h-6 w-6" />
                </div>
                <div>
                  <div className="font-bold text-navy">Sarah Johnson</div>
                  <div className="text-sm text-slate-600">CTO, TechStart Inc.</div>
                </div>
              </div>
              <p className="text-slate-600 italic text-lg leading-relaxed">
                "CognitionSync's AI-powered solution transformed our customer service operations. The team's expertise in machine learning and automation delivered results beyond our expectations. Their attention to detail and commitment to our success made them true partners."
              </p>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Successful business partnership meeting" 
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
