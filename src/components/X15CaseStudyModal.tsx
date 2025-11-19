import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Globe, Clock, Code, Target, Zap, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import x15Screenshot from "@/assets/x15pcbuilders-screenshot.png";

interface X15CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const X15CaseStudyModal = ({ isOpen, onClose }: X15CaseStudyModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <DialogTitle className="text-3xl mb-2">X15 PC Builders</DialogTitle>
              <p className="text-muted-foreground">Professional PC Building Service Website</p>
              <div className="flex gap-2 flex-wrap mt-3">
                <Badge className="bg-green-500 text-white">LIVE PROJECT</Badge>
                <Badge variant="outline">Web Development</Badge>
                <Badge variant="outline">Sister Brand</Badge>
              </div>
            </div>
          </div>
        </DialogHeader>

        {/* Large Screenshot */}
        <div className="w-full h-64 md:h-96 bg-muted rounded-lg overflow-hidden mb-6 border">
          <img 
            src={x15Screenshot} 
            alt="X15 PC Builders Website" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Case Study Content */}
        <div className="space-y-6">
          {/* Project Overview */}
          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Project Overview
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              X15 PC Builders is our sister brand offering custom PC building, repairs, and maintenance services. 
              We needed a professional website to showcase services, display pricing packages, and allow customers 
              to easily request custom builds or service bookings.
            </p>
          </div>

          {/* Challenge */}
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              The Challenge
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">Create a professional showcase for PC building services</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">Display clear pricing packages and service options</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">Make it easy for customers to request custom PC builds</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">Ensure fast loading and mobile responsiveness</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">Optimize for local SEO to attract UK customers</span>
              </li>
            </ul>
          </div>

          {/* Solution */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Code className="h-5 w-5 text-primary" />
              Our Solution
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-sm">Features Delivered:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Professional showcase website</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Service packages display</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Build request form integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Responsive mobile design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Fast loading performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">SEO optimization</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Development Time</p>
                    <p className="text-sm text-muted-foreground">5 days from concept to launch</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Code className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Technology Stack</p>
                    <p className="text-sm text-muted-foreground">React, Tailwind CSS, Lovable</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Results Achieved
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-3 bg-background rounded-lg">
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-xs text-muted-foreground">Mobile Responsive</p>
              </div>
              <div className="text-center p-3 bg-background rounded-lg">
                <p className="text-2xl font-bold text-primary">&lt;1s</p>
                <p className="text-xs text-muted-foreground">Page Load Time</p>
              </div>
              <div className="text-center p-3 bg-background rounded-lg">
                <p className="text-2xl font-bold text-primary">Live</p>
                <p className="text-xs text-muted-foreground">Deployed & Active</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4 border-t space-y-3">
            <p className="text-center text-sm text-muted-foreground">
              Want a website like this for your business?
            </p>
            <div className="flex gap-3">
              <Button asChild className="flex-1">
                <a href="https://x15pcbuilders.com/" target="_blank" rel="noopener noreferrer">
                  <Globe className="h-4 w-4 mr-2" />
                  View Live Site
                </a>
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <Link to="/contact">Get Similar Website</Link>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
