import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { Eye, Brain, Shield, Zap, Users, BarChart3, Camera, Cpu, CheckCircle } from "lucide-react";
import trackOnImage from "@/assets/trackon-dashboard.jpg";
import sinaImage from "@/assets/sina-platform.jpg";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "TrackOn AI Security Platform",
      category: "Security & Surveillance",
      description: "AI-powered security and surveillance platform designed to detect, analyze, and prevent threats before they happen.",
      longDescription: "TrackOn is a next-generation AI Security & Surveillance Solution that combines advanced camera systems with artificial intelligence to provide real-time monitoring, emotional detection, and behavioral analytics.",
      image: trackOnImage,
      price: "Contact for Pricing",
      features: [
        "Real-Time Video Analytics",
        "Emotion & Behavior Detection",
        "Integration with Existing Systems",
        "Smart Alerts & Reporting",
        "Scalable Architecture",
        "24/7 AI Monitoring"
      ],
      industries: ["Airports", "Retail", "Government", "Healthcare", "Education"],
      badge: "Enterprise Solution",
      badgeColor: "bg-gradient-to-r from-primary to-accent text-white",
      icon: Shield
    },
    {
      id: 2,
      name: "SINA Intelligence Platform",
      category: "AI Testing & Analytics",
      description: "Smart Intelligence & Next-gen Aptitude testing platform for identifying skills, career paths, and learning potential.",
      longDescription: "SINA leverages AI, behavioral science, and data-driven analytics to evaluate cognitive abilities, emotional intelligence, learning patterns & strengths, and career alignment.",
      image: sinaImage,
      price: "Starting from $99/month",
      features: [
        "AI-Driven Aptitude Testing",
        "Emotional Intelligence Mapping",
        "Personalized Career Guidance",
        "Custom Reports for Institutions",
        "Corporate & Professional Applications",
        "Predictive Analytics"
      ],
      industries: ["Education", "HR & Recruitment", "Corporate Training", "Career Counseling"],
      badge: "Growth Solution",
      badgeColor: "bg-gradient-to-r from-secondary to-warning text-white",
      icon: Brain
    }
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
      
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20 mb-6">
            <Cpu className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our AI-Powered Solutions
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Revolutionary AI Products
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of AI-powered solutions designed to transform security, surveillance, and human intelligence assessment across industries.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <Card key={product.id} className="overflow-hidden border-0 bg-gradient-to-br from-card via-card to-muted/20 shadow-lg hover:shadow-xl transition-all duration-500 group hover:scale-[1.02]" style={{ boxShadow: 'var(--shadow-card)' }}>
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={`${product.badgeColor} border-0 shadow-lg`}>
                      {product.badge}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs font-medium border-primary/30 text-primary">
                      {product.category}
                    </Badge>
                    <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {product.price}
                    </span>
                  </div>
                  <CardTitle className="text-2xl mb-2 text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {product.longDescription}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 bg-gradient-to-r from-primary to-accent rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Industries */}
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground flex items-center gap-2">
                      <Users className="h-4 w-4 text-secondary" />
                      Industries
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.industries.map((industry, index) => (
                        <Badge key={index} variant="secondary" className="text-xs bg-gradient-to-r from-secondary/10 to-accent/10 text-secondary border-secondary/20">
                          {industry}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex gap-3 pt-6">
                  <Button className="flex-1 bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300" style={{ boxShadow: 'var(--glow-primary)' }}>
                    <Eye className="mr-2 h-4 w-4" />
                    Request Demo
                  </Button>
                  <Button variant="outline" className="flex-1 border-primary/30 text-primary hover:bg-primary/5">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Integration Showcase */}
        <div className="bg-gradient-to-r from-muted/30 via-card to-muted/30 rounded-3xl p-8 border border-border/50" style={{ boxShadow: 'var(--shadow-elegant)' }}>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Integrated AI Ecosystem
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              While TrackOn focuses on physical security, SINA focuses on human potential. Together, they represent a holistic approach to safety, growth, and intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center gap-4 p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20">
              <div className="p-3 bg-primary/10 rounded-full">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground">TrackOn Security</h3>
                <p className="text-muted-foreground">Securing environments with AI-powered surveillance</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-6 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-2xl border border-secondary/20">
              <div className="p-3 bg-secondary/10 rounded-full">
                <Brain className="h-8 w-8 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground">SINA Intelligence</h3>
                <p className="text-muted-foreground">Empowering individuals with AI-driven insights</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Ready to Experience the Future?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your organization with our AI-powered solutions. Contact us today for a personalized demonstration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 shadow-lg hover:shadow-xl transition-all duration-300" style={{ boxShadow: 'var(--glow-primary)' }}>
              <Zap className="mr-2 h-5 w-5" />
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/5 px-8">
              <Camera className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;