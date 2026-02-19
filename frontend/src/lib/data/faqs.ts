// FAQs data for KRIVOX

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'services' | 'pricing' | 'technical';
}

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What services does KRIVOX provide?',
    answer: 'KRIVOX offers four main service pillars: Digital Presence & Branding (websites, graphics, content), Lead Generation & Growth (Meta ads, YouTube marketing), Business Automation (VA, CRM, data management), and Tech Solutions (app development, dashboards).',
    category: 'general',
  },
  {
    id: '2',
    question: 'How much do your services cost?',
    answer: 'We have three packages: Starter (₹12,000/month) for basic digital presence, Growth (₹35,000/month) for lead generation and marketing, and Scale (₹85,000/month) for complete automation and tech solutions. Custom packages are also available.',
    category: 'pricing',
  },
  {
    id: '3',
    question: 'Do you work with businesses outside Gandhidham/Kutch?',
    answer: 'Yes! While we specialize in the Gandhidham and Kutch region, we work with businesses across Gujarat and India. Most of our services are delivered remotely.',
    category: 'general',
  },
  {
    id: '4',
    question: 'How long does it take to build a website?',
    answer: 'A standard business website takes 2-4 weeks depending on complexity. We provide regular updates and involve you in the design process to ensure you\'re happy with the result.',
    category: 'services',
  },
  {
    id: '5',
    question: 'Do you provide website maintenance?',
    answer: 'Yes, all our packages include ongoing maintenance and support. We handle updates, backups, security, and any technical issues that arise.',
    category: 'technical',
  },
  {
    id: '6',
    question: 'Can you guarantee leads from Meta ads?',
    answer: 'While we can\'t guarantee a specific number of leads, we create data-driven campaigns with proven strategies. Most of our clients see significant lead increases within 2-3 months. We provide transparent reporting so you can track ROI.',
    category: 'services',
  },
  {
    id: '7',
    question: 'Do you offer payment plans?',
    answer: 'Yes, we offer flexible payment plans. For monthly services, you pay month-to-month. For one-time projects, we typically split payment: 40% upfront, 40% mid-project, and 20% on completion.',
    category: 'pricing',
  },
  {
    id: '8',
    question: 'What if I need changes after the project is complete?',
    answer: 'All packages include revision rounds (2-3 depending on package). After project completion, minor tweaks are free for the first month. Larger changes can be handled through our maintenance packages.',
    category: 'services',
  },
  {
    id: '9',
    question: 'Do you provide training on the systems you set up?',
    answer: 'Absolutely! We provide comprehensive training for all systems we implement, including CRM, dashboards, and automation tools. We ensure your team is comfortable using everything.',
    category: 'technical',
  },
  {
    id: '10',
    question: 'Can I start with a smaller package and upgrade later?',
    answer: 'Yes! Many clients start with our Starter package and upgrade to Growth or Scale as their business grows. We make the transition smooth and seamless.',
    category: 'pricing',
  },
  {
    id: '11',
    question: 'Do you create content in Sindhi or Gujarati?',
    answer: 'Yes! We specialize in regional language marketing. Our team can create content, graphics, and campaigns in Sindhi and Gujarati to better connect with local audiences.',
    category: 'services',
  },
  {
    id: '12',
    question: 'What makes KRIVOX different from other agencies?',
    answer: 'Unlike typical agencies that just focus on marketing, we handle your complete digital operations - from branding to lead generation to business automation. We\'re a one-stop solution, and we understand the local Gandhidham/Kutch business ecosystem.',
    category: 'general',
  },
];

export function getFAQsByCategory(category: FAQ['category']) {
  return faqs.filter((faq) => faq.category === category);
}