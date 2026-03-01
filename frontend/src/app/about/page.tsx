'use client';

import Image from 'next/image';
import { Target, Users, Lightbulb, Award, Heart, Sparkles, TrendingUp, Zap } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';
import { CTASection } from '@/components/home/CTASection';

const teamMembers = [
  {
    name: 'Keval Pokar',
    role: 'CFO',
    image: '/team/KEVAL.jpeg',
    color: '#7c3aed',
    bgColor: '#7c3aed20',
    objectPosition: 'center top',
  },
  {
    name: 'Aditya Sharma',
    role: 'Business Strategist',
    image: '/team/Aditya.jpeg',
    color: '#10b981',
    bgColor: '#10b98120',
    objectPosition: 'center top',
  },
  {
    name: 'Bhawansh Patel',
    role: 'Leads Generation',
    image: '/team/bhawansh patel .jpeg',
    color: '#f59e0b',
    bgColor: '#f59e0b20',
    objectPosition: '50% 15%',
  },
  {
    name: 'Rishikesh Parmar',
    role: 'Software Developer',
    image: '/team/rishikeshparmar.jpeg',
    color: '#6366f1',
    bgColor: '#6366f120',
    objectPosition: '50% 65%',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-0">
      {/* ── Hero ── */}
      <section className="pt-20 sm:pt-24 pb-8 sm:pb-12 min-h-screen flex items-center bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-3 py-1.5 mb-3 sm:mb-4">
                  <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                  <span className="text-xs font-semibold">About KRIVOXX</span>
                </div>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight px-2">
                  Trusted{' '}
                  <span className="text-primary">Digital Growth Partner</span>{' '}
                  in Gandhidham
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
                  We're not just another digital agency — we're a growth partner dedicated to transforming local businesses in Gandhidham & Kutch through innovative digital solutions.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {[
                { icon: Target, label: 'Our Mission', sub: 'Empower businesses with digital solutions', bg: 'bg-primary/10', iconColor: 'text-primary' },
                { icon: Sparkles, label: 'Our Vision', sub: 'Most trusted partner across Gujarat', bg: 'bg-green-100', iconColor: 'text-green-600' },
                { icon: Zap, label: 'Innovation', sub: 'Latest tech & creative solutions', bg: 'bg-orange-100', iconColor: 'text-orange-600' },
                { icon: TrendingUp, label: 'Results Driven', sub: 'Focused on ROI & growth', bg: 'bg-purple-100', iconColor: 'text-purple-600' },
              ].map(({ icon: Icon, label, sub, bg, iconColor }, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 shadow-md hover:shadow-lg transition-shadow text-center">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${bg} rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3`}>
                      <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${iconColor}`} />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">{label}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed hidden sm:block">{sub}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.5}>
              <div className="mt-4 sm:mt-6 bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
                  {[
                    { val: '15+', label: 'Services', color: 'text-primary' },
                    { val: '100%', label: 'Dedication', color: 'text-green-600' },
                    { val: '24/7', label: 'Support', color: 'text-orange-600' },
                    { val: 'Local', label: 'Expertise', color: 'text-purple-600' },
                  ].map(({ val, label, color }) => (
                    <div key={label}>
                      <div className={`text-xl sm:text-2xl font-bold ${color} mb-1`}>{val}</div>
                      <div className="text-xs text-gray-600">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p>KRIVOXX was born from a simple observation: local businesses in Gandhidham and Kutch had incredible potential but lacked access to professional, affordable digital services that could help them grow.</p>
                <p>We saw businesses struggling with multiple vendors for different services — one for website, another for social media, someone else for ads, and yet another for automation. This fragmented approach was not only expensive but also inefficient.</p>
                <p>That's when we decided to create KRIVOXX — a one-stop solution that brings together everything a business needs to succeed digitally. From your first website to advanced automation systems, we handle it all under one roof.</p>
                <p>As a startup, we're committed to building lasting partnerships with businesses and helping them transform their digital presence with innovative, results-driven solutions.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">Our Values</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Users, title: 'Client First', description: 'Your success is our success. We prioritize your needs and goals above everything.', color: '#6366f1' },
              { icon: Target, title: 'Results Driven', description: 'We focus on measurable outcomes and ROI, not just deliverables.', color: '#10b981' },
              { icon: Lightbulb, title: 'Innovation', description: 'We stay ahead with the latest technology and creative solutions.', color: '#f59e0b' },
              { icon: Award, title: 'Transparency', description: 'Honest communication, clear pricing, and no hidden surprises.', color: '#ec4899' },
            ].map((value, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: `${value.color}20` }}>
                    <value.icon className="w-8 h-8" style={{ color: value.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-20 bg-white" id="team">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-14">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-3 py-1.5 mb-4">
                <Users className="w-3.5 h-3.5" />
                <span className="text-xs font-semibold">The People Behind KRIVOXX</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet Our Team</h2>
              <p className="text-gray-600 mt-3 max-w-xl mx-auto text-base">
                A passionate group of specialists committed to driving your digital success.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden text-center border border-gray-100 hover:-translate-y-1">
                  {/* Photo container */}
                  <div
                    className="relative w-full aspect-[3/4] overflow-hidden"
                    style={{ backgroundColor: member.bgColor }}
                  >
                    {/* Colored top accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 z-10" style={{ backgroundColor: member.color }} />

                    {/* Actual team photo */}
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: member.objectPosition }}
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />

                    {/* Subtle gradient overlay at bottom for text readability */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  <div className="p-4">
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-tight">{member.name}</h3>
                    <span
                      className="inline-block mt-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                      style={{ backgroundColor: member.bgColor, color: member.color }}
                    >
                      {member.role}
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose KRIVOXX ── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Why Businesses Choose KRIVOXX</h2>
            </FadeIn>
            <div className="space-y-6">
              {[
                { title: 'Local Understanding', description: 'We understand the unique challenges and opportunities of businesses in Gandhidham and Kutch region.' },
                { title: 'One-Stop Solution', description: 'From branding to automation, everything you need under one roof. No more juggling multiple vendors.' },
                { title: 'Affordable Excellence', description: "Professional services at prices that make sense for local businesses. Quality doesn't have to be expensive." },
                { title: 'Quality Focused', description: 'Committed to delivering excellence in every project with attention to detail and modern standards.' },
                { title: 'Modern Technology', description: 'We use the latest tools and technologies to give you a competitive edge in the digital world.' },
                { title: 'Ongoing Support', description: "We don't disappear after project delivery. We're here for the long haul as your growth partner." },
              ].map((item, index) => (
                <SlideIn key={index} direction="left" delay={index * 0.1}>
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </SlideIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
