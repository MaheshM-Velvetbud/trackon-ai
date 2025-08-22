import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import heroImage from '@/assets/ai-security-hero.jpg';
import { 
  Eye, 
  Brain, 
  Shield, 
  Zap, 
  Users, 
  Building, 
  Plane, 
  ShoppingCart,
  GraduationCap,
  Hospital,
  CheckCircle,
  ArrowRight,
  Play,
  Sparkles
} from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: Eye,
      title: 'Real-Time Video Analytics',
      description: 'Monitors live camera feeds and instantly identifies abnormal behavior, detecting suspicious activities and generating instant alerts.'
    },
    {
      icon: Brain,
      title: 'Emotion & Behavior Detection',
      description: 'AI-powered fusion of technology and psychology to identify human emotions like anger, fear, stress, and predict potential incidents.'
    },
    {
      icon: Shield,
      title: 'Integration with Existing Systems',
      description: 'Compatible with major IP camera brands and works seamlessly with existing setups through on-premise deployment.'
    },
    {
      icon: Zap,
      title: 'Smart Alerts & Reporting',
      description: 'Multi-channel alerts via mobile, email, or dashboard with customizable reporting and detailed incident timelines.'
    }
  ];

  const industries = [
    { icon: Plane, title: 'Airports & Transportation', desc: 'Detect suspicious passengers and crowd anomalies' },
    { icon: ShoppingCart, title: 'Retail & Shopping Malls', desc: 'Prevent shoplifting and analyze customer behavior' },
    { icon: Building, title: 'Government & Law Enforcement', desc: 'Secure critical facilities and support investigations' },
    { icon: Hospital, title: 'Hospitals & Schools', desc: 'Ensure safety and prevent aggression incidents' },
    { icon: Users, title: 'Corporate Offices', desc: 'Monitor access and ensure compliance' },
    { icon: GraduationCap, title: 'Educational Institutions', desc: 'Enhance campus security and safety' }
  ];

  const benefits = [
    'Prevents incidents before they escalate',
    'Improves efficiency of security teams',
    'Reduces theft and financial losses',
    'Enhances compliance with security regulations',
    'Provides 24/7 monitoring with AI precision',
    'Seamlessly integrates with existing infrastructure'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div style={{
        background: `var(--gradient-mesh)`,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1
      }} />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 bg-gradient-to-r from-primary/10 to-accent/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
              <Sparkles className="w-4 h-4 mr-2" />
              Next-Generation AI Security Platform
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Smarter Security.
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
                Sharper Insights.
              </span>
              <br />
              <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
                Stronger Protection.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
              TrackOn is an AI-powered security and surveillance platform designed to detect, analyze, 
              and prevent threats before they happen. Whether for government, retail, airports, or enterprises, 
              TrackOn ensures safety with intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group" 
                style={{ boxShadow: 'var(--glow-primary)' }}
              >
                Request a Demo
                <Play className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-primary/30 text-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 px-8 py-6 text-lg group"
              >
                Explore Features
                <ArrowRight className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">95%+</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">24/7</div>
                <div className="text-sm text-muted-foreground">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">10K+</div>
                <div className="text-sm text-muted-foreground">Camera Support</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative max-w-6xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/15 to-accent/20 rounded-3xl blur-3xl transform -rotate-1"></div>
            <img 
              src={heroImage} 
              alt="TrackOn AI Security Platform Dashboard" 
              className="relative w-full h-auto rounded-3xl shadow-2xl border border-border/20 hover:scale-[1.02] transition-transform duration-500" 
              style={{ boxShadow: 'var(--shadow-elegant)' }}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Core Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced AI capabilities that transform traditional surveillance into intelligent security
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card/50 border-border/50 hover:border-primary/30 transition-all hover:shadow-lg group">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Protecting diverse environments with tailored AI security solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="bg-card/70 hover:bg-card transition-all hover:shadow-lg group cursor-pointer">
                <CardContent className="p-6 space-y-3">
                  <industry.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                  <h3 className="font-semibold">{industry.title}</h3>
                  <p className="text-sm text-muted-foreground">{industry.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Why Choose TrackOn?</h2>
              <p className="text-lg text-muted-foreground">
                Trusted by airports, government agencies, and retail giants. Backed by cutting-edge 
                AI emotion detection technology and designed with future-proof scalability.
              </p>
              
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">System Performance</span>
                      <span className="text-sm text-primary">Excellent</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full w-[95%]"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Threat Detection</span>
                      <span className="text-sm text-primary">Real-time</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full w-full glow-pulse"></div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border/50">
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">SIRA Compliant</div>
                      <div className="text-sm text-muted-foreground">UAE Security Standards</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to experience the future of security?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Protect your people, assets, and reputation with TrackOn's AI-powered surveillance platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:from-primary-glow hover:to-accent cyber-glow"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary/30 hover:border-primary">
                Request a Demo
                <Play className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold gradient-text">TrackOn</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 TrackOn AI Security. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;