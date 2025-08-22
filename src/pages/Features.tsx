import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Eye, 
  Brain, 
  Shield, 
  Zap, 
  Bell, 
  BarChart3, 
  Network, 
  Server, 
  Smartphone, 
  Mail, 
  Monitor, 
  FileText,
  Clock,
  Camera,
  Users,
  Building2,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Star
} from 'lucide-react';

const Features = () => {
  const coreFeatures = [
    {
      icon: Eye,
      title: 'Real-Time Video Analytics',
      description: 'Advanced AI monitors live camera feeds and instantly identifies abnormal behavior patterns.',
      features: [
        'Monitors live camera feeds continuously',
        'Detects suspicious activities like loitering and intrusion', 
        'Identifies theft attempts and crowd gatherings',
        'Generates instant alerts to security teams',
        'Provides visual evidence with incident timestamps'
      ]
    },
    {
      icon: Brain,
      title: 'Emotion & Behavior Detection',
      description: 'Revolutionary fusion of technology and psychology to understand human emotions and predict behavior.',
      features: [
        'Identifies emotions: anger, fear, stress, nervousness',
        'Detects shoplifting behavioral patterns',
        'Recognizes workplace aggression indicators',
        'Predicts potential security breaches',
        'Supports early intervention strategies'
      ]
    },
    {
      icon: Network,
      title: 'System Integration',
      description: 'Seamlessly connects with your existing security infrastructure without major overhauls.',
      features: [
        'Compatible with major IP camera brands',
        'Works with existing CCTV setups',
        'On-premise deployment options',
        'Scalable from 2 to 10,000+ cameras',
        'Flexible API integration capabilities'
      ]
    },
    {
      icon: Bell,
      title: 'Smart Alerts & Reporting',
      description: 'Intelligent notification system with comprehensive reporting and analytics dashboard.',
      features: [
        'Multi-channel alerts: mobile, email, dashboard',
        'Customizable alert thresholds and rules',
        'Detailed incident timelines with evidence',
        'Compliance reporting for audits',
        'Real-time dashboard monitoring'
      ]
    }
  ];

  const sinaFeatures = [
    {
      icon: Brain,
      title: 'AI-Driven Aptitude Testing',
      description: 'Adaptive questioning that evolves based on user responses for accurate assessment.',
      capabilities: [
        'Problem-solving evaluation',
        'Logical reasoning assessment',
        'Analytical skills measurement',
        'Learning pattern analysis'
      ]
    },
    {
      icon: Users,
      title: 'Emotional Intelligence Mapping',
      description: 'Comprehensive EQ assessment for personal and professional development.',
      capabilities: [
        'Empathy level assessment',
        'Self-control evaluation',
        'Leadership potential identification',
        'Stress management analysis'
      ]
    },
    {
      icon: BarChart3,
      title: 'Career Guidance Engine',
      description: 'AI-powered recommendations matching natural abilities to career opportunities.',
      capabilities: [
        'Career path recommendations',
        'Educational roadmap suggestions',
        'Skill gap identification',
        'Professional development planning'
      ]
    },
    {
      icon: FileText,
      title: 'Comprehensive Reporting',
      description: 'Detailed reports for institutions, parents, and HR departments.',
      capabilities: [
        'Student readiness assessments',
        'Candidate screening reports',
        'Team placement recommendations',
        'Custom institutional analytics'
      ]
    }
  ];

  const architectureFeatures = [
    {
      icon: Server,
      title: 'Scalable Architecture',
      description: 'Enterprise-grade infrastructure that grows with your needs',
      specs: ['2 to 10,000+ camera support', 'AI-powered optimization', 'Load balancing', 'Redundancy built-in']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Built with security and regulatory compliance at its core',
      specs: ['SIRA UAE compliant', 'GDPR ready', 'End-to-end encryption', 'Audit trail logging']
    },
    {
      icon: Clock,
      title: 'Real-Time Processing',
      description: 'Ultra-low latency processing for immediate threat response',
      specs: ['< 100ms response time', '24/7 monitoring', 'Edge computing support', 'Fail-safe mechanisms']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="outline" className="border-primary/50 text-primary">
              <Sparkles className="w-3 h-3 mr-1" />
              Advanced AI Features
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Powerful <span className="gradient-text">AI Features</span> for Next-Level Security
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore TrackOn's comprehensive suite of AI-powered security features and our innovative 
              SINA platform for human intelligence assessment.
            </p>
          </div>
        </div>
      </section>

      {/* Features Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="trackon" className="space-y-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-muted/50">
              <TabsTrigger value="trackon" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                TrackOn Security
              </TabsTrigger>
              <TabsTrigger value="sina" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                SINA Intelligence
              </TabsTrigger>
            </TabsList>

            <TabsContent value="trackon" className="space-y-16">
              {/* Core Features */}
              <div className="space-y-12">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold">TrackOn Core Features</h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Advanced AI security capabilities that transform traditional surveillance
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {coreFeatures.map((feature, index) => (
                    <Card key={index} className="bg-card/70 hover:bg-card transition-all hover:shadow-lg group">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <feature.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="space-y-1">
                            <CardTitle className="text-xl">{feature.title}</CardTitle>
                            <p className="text-muted-foreground text-sm">{feature.description}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {feature.features.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{item}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Architecture Features */}
              <div className="space-y-8">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold">Enterprise Architecture</h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Built for scale, security, and reliability
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {architectureFeatures.map((feature, index) => (
                    <Card key={index} className="text-center bg-gradient-to-b from-primary/5 to-accent/5 border-primary/20">
                      <CardContent className="p-6 space-y-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                          <feature.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="font-semibold">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                        <div className="space-y-1">
                          {feature.specs.map((spec, idx) => (
                            <div key={idx} className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                              {spec}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="sina" className="space-y-12">
              {/* SINA Features */}
              <div className="space-y-12">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    SINA - Smart Intelligence & Next-gen Aptitude
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    AI-powered platform for aptitude testing and emotional intelligence assessment, 
                    complementing TrackOn's security focus with human potential insights.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {sinaFeatures.map((feature, index) => (
                    <Card key={index} className="bg-card/70 hover:bg-card transition-all hover:shadow-lg group">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                            <feature.icon className="w-6 h-6 text-accent" />
                          </div>
                          <div className="space-y-1">
                            <CardTitle className="text-xl">{feature.title}</CardTitle>
                            <p className="text-muted-foreground text-sm">{feature.description}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 gap-2">
                          {feature.capabilities.map((capability, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <Star className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{capability}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-accent/30">
                  <CardContent className="p-8 text-center space-y-4">
                    <h3 className="text-2xl font-bold">Holistic Intelligence Ecosystem</h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      While TrackOn focuses on physical security, SINA focuses on human potential. 
                      Together, they represent a comprehensive approach to safety, growth, and intelligence—securing 
                      environments while empowering individuals.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 pt-4">
                      <Badge variant="secondary">Career Guidance</Badge>
                      <Badge variant="secondary">Talent Assessment</Badge>
                      <Badge variant="secondary">HR Screening</Badge>
                      <Badge variant="secondary">Educational Planning</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Experience the Power of AI-Driven Intelligence
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From security surveillance to human potential assessment, our AI platforms deliver unprecedented insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:from-primary-glow hover:to-accent cyber-glow"
              >
                Schedule Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary/30 hover:border-primary">
                Technical Specifications
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

export default Features;