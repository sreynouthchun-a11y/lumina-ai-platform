import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Cpu, Globe, Zap, CheckCircle2, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <nav className="fixed w-full z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">L</div>
            <span>Lumina AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#architecture" className="hover:text-primary transition-colors">Architecture</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-full hover:opacity-90 transition-all">Get Started</button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-background border-b p-4 flex flex-col gap-4 animate-in slide-in-from-top">
          <a href="#features" className="block py-2" onClick={() => setIsOpen(false)}>Features</a>
          <a href="#architecture" className="block py-2" onClick={() => setIsOpen(false)}>Architecture</a>
          <a href="#pricing" className="block py-2" onClick={() => setIsOpen(false)}>Pricing</a>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-full">Get Started</button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="pt-32 pb-20 px-4">
    <div className="max-w-5xl mx-auto text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        v2.0 Now Available
      </motion.div>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.1 }}
        className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60"
      >
        Intelligence that <br />scales with your vision.
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.2 }}
        className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
      >
        Lumina AI provides a comprehensive suite of generative tools designed to accelerate 
        your development workflow and automate complex cognitive tasks with precision.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.3 }}
        className="flex flex-col sm:flex-row justify-center gap-4"
      >
        <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all">
          Start Building <ArrowRight size={18} />
        </button>
        <button className="border px-8 py-3 rounded-full font-medium hover:bg-accent transition-all">
          View Documentation
        </button>
      </motion.div>
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 rounded-2xl border bg-card hover:shadow-lg transition-all group">
    <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

const Features = () => (
  <section id="features" className="py-20 px-4 bg-secondary/30">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Engineered for Excellence</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Everything you need to deploy production-ready AI agents and workflows in minutes.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <FeatureCard 
          icon={Bot} 
          title="Autonomous Agents" 
          description="Deploy agents that can reason, plan, and execute complex multi-step tasks independently." 
        />
        <FeatureCard 
          icon={Cpu} 
          title="Neural Optimization" 
          description="Low-latency inference with optimized weights for maximum throughput and minimal cost." 
        />
        <FeatureCard 
          icon={Globe} 
          title="Global Edge Network" 
          description="Deploy your AI models to the edge, ensuring sub-100ms response times globally." 
        />
        <FeatureCard 
          icon={Zap} 
          title="Real-time Streaming" 
          description="Native support for server-sent events and streaming responses for a fluid UX." 
        />
        <FeatureCard 
          icon={CheckCircle2} 
          title="Enterprise Security" 
          description="SOC2 compliant data handling with end-to-end encryption for all sensitive prompts." 
        />
        <FeatureCard 
          icon={ArrowRight} 
          title="Custom Fine-tuning" 
          description="Easily adapt base models to your specific domain with our intuitive tuning pipeline." 
        />
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="py-20 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
        <p className="text-muted-foreground">Scale from prototype to production without surprises.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {[
          { name: 'Starter', price: '0', features: ['1,000 tokens/mo', 'Community Support', 'Basic API Access'] },
          { name: 'Pro', price: '49', features: ['1M tokens/mo', 'Priority Support', 'Advanced Analytics', 'Custom Models'], highlight: true },
          { name: 'Enterprise', price: 'Custom', features: ['Unlimited tokens', 'Dedicated Account Manager', 'SLA Guarantee', 'On-prem Deployment'] },
        ].map((plan) => (
          <div key={plan.name} className={`p-8 rounded-2xl border flex flex-col ${plan.highlight ? 'border-primary ring-1 ring-primary relative' : ''}`}>
            {plan.highlight && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>}
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <div className="text-4xl font-bold mb-6">{plan.price === 'Custom' ? 'Custom' : `$${plan.price}/mo`}</div>
            <ul className="space-y-4 mb-8 flex-grow">
              {plan.features.map(f => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 size={16} className="text-primary" /> {f}
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 rounded-xl font-medium transition-all ${plan.highlight ? 'bg-primary text-primary-foreground' : 'border hover:bg-accent'}`}>
              Choose {plan.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t py-12 px-4 bg-secondary/20">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
      <div className="col-span-2">
        <div className="flex items-center gap-2 font-bold text-xl mb-4">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">L</div>
          <span>Lumina AI</span>
        </div>
        <p className="text-muted-foreground max-w-xs text-sm">
          Empowering the next generation of intelligent applications with scalable, 
          production-ready AI infrastructure.
        </p>
      </div>
      <div>
        <h4 className="font-bold mb-4">Product</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><a href="#" className="hover:text-primary">Features</a></li>
          <li><a href="#" className="hover:text-primary">Pricing</a></li>
          <li><a href="#" className="hover:text-primary">API Docs</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-4">Company</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><a href="#" className="hover:text-primary">About</a></li>
          <li><a href="#" className="hover:text-primary">Blog</a></li>
          <li><a href="#" className="hover:text-primary">Careers</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} Lumina AI Platform. All rights reserved.
    </div>
  </footer>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}