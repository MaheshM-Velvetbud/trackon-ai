import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  Eye, 
  Shield, 
  Zap, 
  Target, 
  Users, 
  Award, 
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

const About = () => {
  const capabilities = [
    {
      icon: Eye,
      title: 'Advanced Computer Vision',
      description: 'State-of-the-art AI algorithms that process visual data in real-time with 95%+ accuracy in controlled environments.'
    },
    {
      icon: Brain,
      title: 'Emotional Intelligence',
      description: 'Fusion of technology and psychology to detect human emotions like fear, anger, stress, and nervousness.'
    },
    {
      icon: Target,
      title: 'Behavioral Analytics',
      description: 'Identifies unusual activities such as loitering, sudden movements, or unauthorized access before incidents escalate.'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Instant threat identification and alert generation, empowering security personnel to act faster and more effectively.'
    }
  ];

  const differentiators = [
    'Prevents incidents before they occur, not just documenting them afterward',
    'Assists investigations with precise data, emotion mapping, and incident timelines',
    'Enhances compliance with international and local security regulations, including SIRA standards',
    'Seamlessly integrates with existing camera infrastructures without complete overhaul',
    'Scales from 2 cameras to 10,000+ with AI-powered server optimization',
    'Provides 24/7 support and tailored deployment for every client'
  ];

  return (
    <>
   
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="border-primary/50 text-primary">
              <Sparkles className="w-3 h-3 mr-1" />
              Next-Generation AI Security
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              About <span className="gradient-text">TrackOn</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              TrackOn is a next-generation AI Security & Surveillance Solution that combines advanced camera systems 
              with artificial intelligence to provide real-time monitoring, emotional detection, and behavioral analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                TrackOn is designed to redefine the way organizations protect their people, assets, and environments. 
                Unlike traditional CCTV systems that merely record events, TrackOn harnesses the power of artificial 
                intelligence, computer vision, and advanced camera technologies to actively monitor, analyze, and respond in real time.
              </p>
              
              <p className="text-muted-foreground">
                At its core, TrackOn integrates seamlessly with existing camera infrastructures, converting them into 
                intelligent surveillance ecosystems. This means organizations do not need to overhaul their entire 
                security setup—TrackOn leverages current systems and enhances them with state-of-the-art AI-driven analytics.
              </p>
            </div>
            
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Strategic Security Partner</h3>
                      <p className="text-sm text-muted-foreground">Evolving with your environment</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-sm">SIRA UAE Compliant</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-sm">Trusted by Enterprises</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary" />
                      <span className="text-sm">Real-time Intelligence</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">What Sets TrackOn Apart</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI-powered platform goes beyond visual monitoring to provide predictive intelligence and proactive security
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {capabilities.map((capability, index) => (
              <Card key={index} className="bg-card/70 hover:bg-card transition-all hover:shadow-lg group">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <capability.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">{capability.title}</h3>
                      <p className="text-muted-foreground">{capability.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Transforming Surveillance into Intelligence
              </h2>
              
              <p className="text-lg text-muted-foreground">
                This powerful combination of predictive intelligence and proactive security transforms 
                surveillance from a passive tool into an active safeguard.
              </p>
              
              <div className="space-y-3">
                {differentiators.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-primary/20 to-accent/20 border-primary/30">
                <CardContent className="p-8 text-center space-y-4">
                  <h3 className="text-2xl font-bold gradient-text">Deployment Flexibility</h3>
                  <p className="text-muted-foreground">
                    Whether deployed in airports, shopping malls, hospitals, government facilities, 
                    schools, or corporate campuses, TrackOn provides the intelligence, accuracy, 
                    and reliability needed for next-level protection.
                  </p>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-card/70 text-center p-6">
                  <div className="text-2xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground">Camera Support</div>
                </Card>
                <Card className="bg-card/70 text-center p-6">
                  <div className="text-2xl font-bold text-primary">95%+</div>
                  <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Transform Your Security?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Experience the power of AI-driven security intelligence with TrackOn's comprehensive surveillance solution.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:from-primary-glow hover:to-accent cyber-glow"
              >
                Contact Our Team
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
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
    </>
  );
};

export default About;