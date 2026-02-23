import { Target, Users, TrendingUp, Shield, Clock, Sparkles } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';

const benefits = [
  {
    icon: Target,
    title: 'One-Stop Solution',
    description: 'No need to manage multiple vendors. We handle everything from branding to automation.',
    color: '#7c3aed',
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
    color: '#a855f7',
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
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left Side ── */}
          <div>
            <FadeIn>
              <div className="inline-flex items-center space-x-2 rounded-full px-4 py-2 mb-6"
                style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)' }}>
                <Sparkles className="w-4 h-4 text-violet-600" />
                <span className="text-violet-700 text-sm font-medium">Why Choose KRIVOXX</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5 leading-tight">
                Your Trusted Digital Partner{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  in Gandhidham
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                We're not just another agency — we're your growth partner who understands local business challenges and delivers real results.
              </p>
            </FadeIn>

            {/* Promise Card - dark, rich */}
            <SlideIn direction="left" delay={0.3}>
              <div
                className="relative rounded-2xl p-8 text-white overflow-hidden card-shine"
                style={{
                  background: 'linear-gradient(135deg, #12002a 0%, #1a0030 50%, #0a0018 100%)',
                  border: '1px solid rgba(124,58,237,0.3)',
                  boxShadow: '0 20px 60px rgba(124,58,237,0.2)',
                }}
              >
                {/* Top glow line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: 'linear-gradient(90deg, transparent, #a855f7, transparent)' }}
                />
                <h3 className="text-xl font-bold mb-5 text-white flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(124,58,237,0.4)' }}>
                    <Shield className="w-3.5 h-3.5 text-violet-300" />
                  </div>
                  Our Promise
                </h3>
                <ul className="space-y-4">
                  {[
                    'No hidden costs or surprise charges',
                    'Dedicated support throughout your journey',
                    'Results-oriented approach, not just deliverables',
                  ].map((item) => (
                    <li key={item} className="flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: 'rgba(124,58,237,0.4)', border: '1px solid rgba(196,181,253,0.3)' }}>
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-300" />
                      </div>
                      <span className="text-violet-100/80 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SlideIn>
          </div>

          {/* ── Right Side - Benefits Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {benefits.map((benefit, index) => (
              <SlideIn key={index} direction="right" delay={index * 0.08}>
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border border-gray-100 group card-shine relative overflow-hidden">
                  {/* Colored top border */}
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, ${benefit.color}, transparent)` }}
                  />
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${benefit.color}15` }}
                  >
                    <benefit.icon className="w-5 h-5" style={{ color: benefit.color }} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{benefit.description}</p>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
