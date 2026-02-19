import { Target, Users, TrendingUp, Shield, Clock, Sparkles } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';

const benefits = [
  {
    icon: Target,
    title: 'One-Stop Solution',
    description: 'No need to manage multiple vendors. We handle everything from branding to automation.',
    color: '#6366f1',
  },
  {
    icon: Users,
    title: 'Local Expertise',
    description: 'Deep understanding of Gandhidham & Kutch business ecosystem and regional markets.',
    color: '#10b981',
  },
  {
    icon: TrendingUp,
    title: 'Results Focused',
    description: 'We focus on leads and growth, not just fancy designs. Your ROI is our priority.',
    color: '#f59e0b',
  },
  {
    icon: Shield,
    title: 'Transparent Process',
    description: 'Clear pricing, regular updates, and honest communication throughout the project.',
    color: '#8b5cf6',
  },
  {
    icon: Clock,
    title: 'Quick Turnaround',
    description: 'Fast project delivery without compromising on quality. Start seeing results quickly.',
    color: '#ec4899',
  },
  {
    icon: Sparkles,
    title: 'Modern Technology',
    description: 'Latest tools and tech stack to give you a competitive edge in the digital world.',
    color: '#06b6d4',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <FadeIn>
              <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium">Why Choose KRIVOX</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Trusted Digital Partner in Gandhidham
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We're not just another agency - we're your growth partner who understands local business challenges and delivers real results.
              </p>
            </FadeIn>

            <SlideIn direction="left" delay={0.3}>
              <div className="bg-linear-to-br from-primary to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Promise</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <span>No hidden costs or surprise charges</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <span>Dedicated support throughout your journey</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <span>Results-oriented approach, not just deliverables</span>
                  </li>
                </ul>
              </div>
            </SlideIn>
          </div>

          {/* Right Side - Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <SlideIn key={index} direction="right" delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${benefit.color}20` }}
                  >
                    <benefit.icon className="w-6 h-6" style={{ color: benefit.color }} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}