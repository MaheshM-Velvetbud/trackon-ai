import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Lock, Eye, FileCheck, Globe, UserCheck, AlertTriangle, CheckCircle2 } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="outline" className="border-primary/50 text-primary">
              <Shield className="w-3 h-3 mr-1" />
              Data Protection & Privacy
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              TrackOn AI <span className="gradient-text">Privacy Policy</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to protecting your data with global compliance and privacy-by-design principles
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            
            {/* Introduction */}
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Eye className="w-6 h-6 text-primary" />
                  Introduction
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  TrackOn AI is an advanced surveillance platform with emotion and behavioral analytics capabilities. 
                  Our system is designed to comply with major global data protection regulations including:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <Badge variant="secondary" className="justify-center">GDPR (EU/UK)</Badge>
                  <Badge variant="secondary" className="justify-center">COPPA (USA)</Badge>
                  <Badge variant="secondary" className="justify-center">DPDP (India)</Badge>
                  <Badge variant="secondary" className="justify-center">PIPL (China)</Badge>
                  <Badge variant="secondary" className="justify-center">LGPD (Brazil)</Badge>
                  <Badge variant="secondary" className="justify-center">POPIA (South Africa)</Badge>
                  <Badge variant="secondary" className="justify-center">UAE PDPL</Badge>
                  <Badge variant="secondary" className="justify-center">And Others</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Core Privacy Principles */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Lock className="w-6 h-6 text-primary" />
                  Core Privacy Principles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Lawfulness & Transparency</h4>
                        <p className="text-sm text-muted-foreground">Subjects must know when and why data is collected</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Purpose Limitation</h4>
                        <p className="text-sm text-muted-foreground">Data used only for security, safety, and compliance</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Data Minimisation</h4>
                        <p className="text-sm text-muted-foreground">Capture only what's necessary for security purposes</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Storage Limitation</h4>
                        <p className="text-sm text-muted-foreground">Retain recordings for legal/business periods only</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Integrity & Confidentiality</h4>
                        <p className="text-sm text-muted-foreground">Encryption, secure transmission, restricted access</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Accountability</h4>
                        <p className="text-sm text-muted-foreground">Maintain audit logs, privacy assessments, compliance reports</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Global Alignment */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Globe className="w-6 h-6 text-primary" />
                  How TrackOn AI Aligns Globally
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-primary" />
                    Consent & Legal Basis
                  </h4>
                  <ul className="space-y-2 text-muted-foreground ml-7">
                    <li>• Operates on legitimate interest for security purposes</li>
                    <li>• Where minors are involved → masking and restricted access protocols</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    On-Premises / Local Hosting
                  </h4>
                  <ul className="space-y-2 text-muted-foreground ml-7">
                    <li>• Data processed & stored on client-controlled servers</li>
                    <li>• Meets localisation & sovereignty requirements</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <FileCheck className="w-5 h-5 text-primary" />
                    Data Minimisation & Retention
                  </h4>
                  <ul className="space-y-2 text-muted-foreground ml-7">
                    <li>• Only security-relevant footage, alerts, and analytics collected</li>
                    <li>• ❌ No marketing or secondary profiling</li>
                    <li>• Retention period: 30–90 days (per legal guidance)</li>
                    <li>• Automatic overwrite/deletion system</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <Lock className="w-5 h-5 text-primary" />
                    Privacy by Design
                  </h4>
                  <ul className="space-y-2 text-muted-foreground ml-7">
                    <li>• End-to-end encryption and access control</li>
                    <li>• Comprehensive audit trails</li>
                    <li>• Anonymisation tools (face blurring capabilities)</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-primary" />
                    No Commercial Exploitation
                  </h4>
                  <ul className="space-y-2 text-muted-foreground ml-7">
                    <li>• ❌ Data is NOT used for advertising purposes</li>
                    <li>• ❌ No behavioral marketing or data resale</li>
                    <li>• ❌ No commercial profiling activities</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <FileCheck className="w-5 h-5 text-primary" />
                    Accountability & Oversight
                  </h4>
                  <ul className="space-y-2 text-muted-foreground ml-7">
                    <li>• Regular DPIAs (Data Protection Impact Assessments)</li>
                    <li>• Independent audits and compliance reporting</li>
                    <li>• Direct reporting to regulatory authorities when required</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Statement for Authorities */}
            <Card className="bg-accent/10 border-accent/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-accent">
                  <FileCheck className="w-6 h-6" />
                  Official Statement for Authorities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-background/50 p-6 rounded-lg border border-accent/20">
                  <p className="text-muted-foreground italic leading-relaxed">
                    "TrackOn AI Security System processes surveillance data lawfully, stores it securely on client 
                    infrastructure, limits retention periods, and employs privacy-by-design features such as anonymisation. 
                    No data is used for advertising or commercial profiling. TrackOn AI complies with GDPR, UAE PDPL, 
                    India's DPDP, China's PIPL, Brazil's LGPD, and other global data protection frameworks."
                  </p>
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

export default Privacy;