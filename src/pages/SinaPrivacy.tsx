import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Lock, Users, FileCheck, Globe, UserCheck, AlertTriangle, CheckCircle2, GraduationCap } from 'lucide-react';

const SinaPrivacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="outline" className="border-accent/50 text-accent">
              <GraduationCap className="w-3 h-3 mr-1" />
              Children's Data Protection
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              SINA <span className="gradient-text">Privacy Policy</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Safeguarding children's data in aptitude testing with the highest global privacy standards
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            
            {/* Introduction */}
            <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-accent/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Users className="w-6 h-6 text-accent" />
                  Introduction
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The SINA Aptitude Test is designed to assess students' abilities in a safe and responsible manner. 
                  We are committed to safeguarding children's data by adhering to international standards including:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <Badge variant="secondary" className="justify-center">COPPA (USA)</Badge>
                  <Badge variant="secondary" className="justify-center">GDPR (EU/UK)</Badge>
                  <Badge variant="secondary" className="justify-center">Children's Code</Badge>
                  <Badge variant="secondary" className="justify-center">DPDP (India)</Badge>
                  <Badge variant="secondary" className="justify-center">PIPL (China)</Badge>
                  <Badge variant="secondary" className="justify-center">LGPD (Brazil)</Badge>
                  <Badge variant="secondary" className="justify-center">POPIA (South Africa)</Badge>
                  <Badge variant="secondary" className="justify-center">Other Regulations</Badge>
                </div>
                <p className="text-muted-foreground">
                  This document outlines how SINA ensures compliance and protects children's personal information globally.
                </p>
              </CardContent>
            </Card>

            {/* Core Principles */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Shield className="w-6 h-6 text-accent" />
                  Core Principles of Children's Data Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Age Threshold Protection</h4>
                      <p className="text-sm text-muted-foreground">Parental/guardian consent required below 13–18 years depending on jurisdiction</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Parental Consent & Involvement</h4>
                      <p className="text-sm text-muted-foreground">No data collection without prior authorisation from parents or guardians</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Purpose Limitation</h4>
                      <p className="text-sm text-muted-foreground">Only data necessary for aptitude assessment is collected</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Data Minimisation & Retention</h4>
                      <p className="text-sm text-muted-foreground">Data stored only as long as needed and can be erased upon request</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Protection from Profiling & Ads</h4>
                      <p className="text-sm text-muted-foreground">No behavioural targeting or marketing is performed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Transparency & Rights</h4>
                      <p className="text-sm text-muted-foreground">Parents and students have the right to access, review, and delete results</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Regulatory Alignment */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Globe className="w-6 h-6 text-accent" />
                  How SINA Aligns with Regulations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-accent" />
                    Consent Management
                  </h4>
                  <ul className="space-y-2 text-muted-foreground ml-7">
                    <li>• Parents/guardians provide explicit consent before data collection</li>
                    <li>• Schools may act under ministry policy with proper authorization</li>
                    <li>• Age thresholds respected (under 13 in USA, under 18 in India, etc.)</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <Shield className="w-5 h-5 text-accent" />
                    On-Premises / Local Hosting
                  </h4>
                  <ul className="space-y-2 text-muted-foreground ml-7">
                    <li>• All test data stored within the institution or country</li>
                    <li>• Meets sovereignty and localisation requirements</li>
                    <li>• No cross-border data transfers without consent</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <FileCheck className="w-5 h-5 text-accent" />
                    Data Minimisation
                  </h4>
                  <ul className="space-y-2 text-muted-foreground ml-7">
                    <li>• Only test responses and scores are collected</li>
                    <li>• No unnecessary identifiers or tracking pixels</li>
                    <li>• Minimal personal data collection approach</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-accent" />
                    Retention & Erasure
                  </h4>
                  <ul className="space-y-2 text-muted-foreground ml-7">
                    <li>• Data retained only during student's academic journey</li>
                    <li>• Erasure requests honored immediately</li>
                    <li>• Automatic deletion after graduation/completion</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <Lock className="w-5 h-5 text-accent" />
                    Privacy by Design
                  </h4>
                  <ul className="space-y-2 text-muted-foreground ml-7">
                    <li>• Encrypted storage and transfer protocols</li>
                    <li>• Age-appropriate reporting mechanisms</li>
                    <li>• Role-based access controls</li>
                    <li>• Comprehensive audit logs for transparency</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-accent" />
                    No Commercial Exploitation
                  </h4>
                  <ul className="space-y-2 text-muted-foreground ml-7">
                    <li>• ❌ Data never used for advertising purposes</li>
                    <li>• ❌ No behavioural profiling for commercial gain</li>
                    <li>• ❌ No data sharing without explicit consent</li>
                    <li>• Focus purely on educational assessment</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Statement for Education Authorities */}
            <Card className="bg-primary/10 border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-primary">
                  <GraduationCap className="w-6 h-6" />
                  Statement for Education Authorities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-background/50 p-6 rounded-lg border border-primary/20">
                  <p className="text-muted-foreground italic leading-relaxed">
                    "The SINA Aptitude Test has been designed with global child data protection standards in mind. 
                    The system operates on-premises or within approved national servers, with student results 
                    encrypted and accessible only to authorised educators. Consent from parents or guardians is 
                    mandatory before testing, and no behavioural profiling or targeted advertising is performed. 
                    Data is retained only for the duration of the student's academic journey and can be erased 
                    upon request. These safeguards align with COPPA (US), GDPR/Children's Code (EU/UK), India's 
                    DPDP Act, China's PIPL, and similar global regulations, ensuring compliance and protecting 
                    every child's privacy."
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Key Benefits */}
            <Card className="bg-gradient-to-br from-accent/5 to-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                  Key Privacy Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-accent" />
                      <span className="font-medium">Complete Parental Control</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-accent" />
                      <span className="font-medium">End-to-End Encryption</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-accent" />
                      <span className="font-medium">Local Data Storage</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <UserCheck className="w-4 h-4 text-accent" />
                      <span className="font-medium">Age-Appropriate Design</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileCheck className="w-4 h-4 text-accent" />
                      <span className="font-medium">Immediate Erasure Rights</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-accent" />
                      <span className="font-medium">Zero Commercial Use</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

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

export default SinaPrivacy;