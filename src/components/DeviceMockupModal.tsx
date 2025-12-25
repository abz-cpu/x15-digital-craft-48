import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Globe, Clock, Code, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { LaptopMockup, PhoneMockup } from "@/components/LaptopMockup";

interface DeviceMockupModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    category: string;
    type: string;
    features: string[];
    timeline: string;
    tech: string;
    image: string;
    isLive?: boolean;
    liveUrl?: string;
  };
  imageSrc: string;
}

export const DeviceMockupModal = ({ isOpen, onClose, project, imageSrc }: DeviceMockupModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[95vh] overflow-y-auto p-0">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <DialogTitle className="text-2xl mb-2">{project.title}</DialogTitle>
              <div className="flex gap-2 flex-wrap">
                <Badge variant={project.isLive ? "default" : "secondary"}>
                  {project.isLive ? "Live Client Project" : "Capability Example"}
                </Badge>
                <Badge variant="outline">{project.type}</Badge>
              </div>
            </div>
          </div>
        </DialogHeader>

        {/* Device Mockup Hero Section */}
        <div className="relative px-6 py-8 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100">
          <div className="relative flex items-end justify-center gap-0">
            {/* Laptop Mockup - Main */}
            <div className="relative z-10 w-full max-w-2xl">
              <LaptopMockup 
                imageSrc={imageSrc} 
                alt={`${project.title} Desktop View`}
              />
            </div>
            
            {/* Phone Mockup - Overlapping */}
            <div className="absolute right-4 md:right-12 lg:right-20 bottom-0 z-20 w-24 md:w-32 lg:w-36 transform translate-y-4">
              <PhoneMockup 
                imageSrc={imageSrc} 
                alt={`${project.title} Mobile View`}
              />
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="p-6 space-y-6">
          {/* Key Info */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Timeline</p>
                <p className="text-sm text-muted-foreground">{project.timeline}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Code className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Technology Stack</p>
                <p className="text-sm text-muted-foreground">{project.tech}</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold mb-3">{project.isLive ? "What We Built:" : "What We Can Build:"}</h3>
            <ul className="grid md:grid-cols-2 gap-2">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="pt-4 border-t">
            {project.isLive ? (
              <div className="flex gap-3">
                <Button asChild className="flex-1">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Globe className="h-4 w-4 mr-2" />
                    View Live Site
                  </a>
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <Link to="/contact">Get Similar Project</Link>
                </Button>
              </div>
            ) : (
              <Button asChild variant="default" className="w-full">
                <Link to="/contact">
                  Interested in something similar? Get a quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};