import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Shield, 
  Sparkles,
  Send,
  CheckCircle2,
  Building2,
  Users,
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import WorldMap from '@/components/Worldmap';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Support',
      content: '+971 (0) 4 XXX XXXX',
      description: '24/7 Technical Support'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@trackon-ai.com',
      description: 'Response within 2 hours'
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      content: 'Dubai, UAE',
      description: 'SIRA Compliant Operations'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: '24/7 Available',
      description: 'Round-the-clock monitoring'
    }
  ];

  const faqs = [
    {
      question: 'Can TrackOn work with my existing CCTV cameras?',
      answer: 'Yes, TrackOn integrates seamlessly with most IP and CCTV systems without requiring a complete infrastructure change.'
    },
    {
      question: 'Is the system SIRA compliant?',
      answer: 'Yes, TrackOn follows SIRA UAE compliance standards and can be configured to meet other regional security regulations.'
    },
    {
      question: 'How accurate is the facial recognition and emotion detection?',
      answer: 'TrackOn AI algorithms achieve over 95% accuracy in controlled environments and continuously improve in real-world conditions.'
    },
    {
      question: 'Do I need a dedicated server?',
      answer: 'Yes, for best performance TrackOn requires an optimized server. We provide specifications for both small and large-scale deployments.'
    }
  ];

  const policyLinks = [
    {
      title: 'TrackOn Data Protection & Privacy Policy',
      description: 'Learn about our comprehensive data protection measures and global compliance standards',
      link: '/privacy'
    },
    {
      title: 'SINA Children\'s Privacy Policy',
      description: 'Our commitment to protecting children\'s data in educational assessments',
      link: '/sina-privacy'
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-12">
      <Navigation />
        {/* World Map */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <WorldMap />
        </div>
      </section>
      
     

     

    

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card/70">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Send className="w-6 h-6 text-primary" />
                  Request a Demo
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="john.doe@company.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+971 XX XXX XXXX" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company/Organization *</Label>
                  <Input id="company" placeholder="Your Organization" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="airport">Airport & Transportation</SelectItem>
                      <SelectItem value="retail">Retail & Shopping Malls</SelectItem>
                      <SelectItem value="government">Government & Law Enforcement</SelectItem>
                      <SelectItem value="hospital">Healthcare & Education</SelectItem>
                      <SelectItem value="corporate">Corporate Offices</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cameras">Number of Cameras</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select camera count" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">1-10 cameras</SelectItem>
                      <SelectItem value="medium">11-50 cameras</SelectItem>
                      <SelectItem value="large">51-200 cameras</SelectItem>
                      <SelectItem value="enterprise">200+ cameras</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your security requirements and how we can help..."
                    className="min-h-[100px]"
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary-glow hover:to-accent cyber-glow">
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
            
            {/* Additional Info */}
            <div className="space-y-8">
              {/* Why Choose Us */}
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-6 h-6 text-primary" />
                    Why Choose TrackOn?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Trusted by Leading Organizations</p>
                        <p className="text-sm text-muted-foreground">Airports, government agencies, and retail giants rely on TrackOn</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Cutting-edge AI Technology</p>
                        <p className="text-sm text-muted-foreground">Advanced emotion detection and behavioral analytics</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Future-proof Scalability</p>
                        <p className="text-sm text-muted-foreground">Grows from 2 to 10,000+ cameras seamlessly</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">24/7 Expert Support</p>
                        <p className="text-sm text-muted-foreground">Tailored deployment and ongoing assistance</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center p-6 bg-card/70">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">95%+</div>
                    <div className="text-sm text-muted-foreground">Detection Accuracy</div>
                  </div>
                </Card>
                <Card className="text-center p-6 bg-card/70">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">&lt; 2hr</div>
                    <div className="text-sm text-muted-foreground">Response Time</div>
                  </div>
                </Card>
              </div>
              
              {/* SINA Integration */}
              <Card className="bg-accent/10 border-accent/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-accent">
                    <Users className="w-6 h-6" />
                    SINA Platform
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Interested in our AI-powered aptitude and emotional intelligence testing platform? 
                    SINA complements TrackOn by focusing on human potential assessment.
                  </p>
                  <Button variant="outline" className="border-accent/30 hover:border-accent text-accent hover:bg-accent/10">
                    Learn About SINA
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about TrackOn implementation and capabilities
            </p>
          </div>
          
          <div className="space-y-8">
            {/* FAQ Items */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-card/70 hover:bg-card transition-all">
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="space-y-2">
                        <h3 className="font-semibold">{faq.question}</h3>
                        <p className="text-sm text-muted-foreground">{faq.answer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Privacy Policy Links */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-6">Privacy & Data Protection</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {policyLinks.map((policy, index) => (
                  <Link key={index} to={policy.link}>
                    <Card className="bg-gradient-to-br from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10 transition-all border-primary/20 hover:border-primary/40 group">
                      <CardContent className="p-6 space-y-3">
                        <div className="flex items-start justify-between">
                          <div className="space-y-2 flex-1">
                            <h4 className="font-semibold group-hover:text-primary transition-colors">{policy.title}</h4>
                            <p className="text-sm text-muted-foreground">{policy.description}</p>
                          </div>
                          <ExternalLink className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity ml-2 flex-shrink-0" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
       {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="outline" className="border-primary/50 text-primary">
              <Sparkles className="w-3 h-3 mr-1" />
              Get In Touch
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Contact <span className="gradient-text">Our Team</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your security infrastructure? Our experts are here to help you implement 
              TrackOn's AI-powered surveillance solutions tailored to your specific needs.
            </p>
          </div>
        </div>
      </section>
       {/* Contact Information */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center bg-card/70 hover:bg-card transition-all hover:shadow-lg group">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">{info.title}</h3>
                    <p className="text-foreground">{info.content}</p>
                    <p className="text-xs text-muted-foreground">{info.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
     <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <img src="/trackonailogo.png" alt="TrackOn Logo" className="h-32 w-32" />
              {/* <span className="text-lg font-bold gradient-text">TrackOn</span> */}
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

export default Contact;