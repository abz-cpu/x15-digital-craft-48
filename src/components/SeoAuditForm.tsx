import { useState, useRef, type FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";
import { useTurnstile } from "@/hooks/useTurnstile";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ConfettiEffect } from "@/components/ConfettiEffect";
import {
  Loader2,
  CheckCircle2,
  Globe,
  Building2,
  MapPin,
  ArrowRight,
  Sparkles,
} from "lucide-react";

// Business type options
const BUSINESS_TYPES = [
  { value: "clinic", label: "Clinic / Healthcare" },
  { value: "trades", label: "Trades / Home Services" },
  { value: "restaurant", label: "Restaurant / Hospitality" },
  { value: "retail", label: "Retail / Shop" },
  { value: "property", label: "Property / Estate Agent" },
  { value: "professional", label: "Professional Services" },
  { value: "salon", label: "Salon / Beauty" },
  { value: "fitness", label: "Fitness / Gym" },
  { value: "other", label: "Other" },
] as const;

// London areas for multi-select
const TARGET_AREAS = [
  { value: "stratford", label: "Stratford" },
  { value: "ilford", label: "Ilford" },
  { value: "east-ham", label: "East Ham" },
  { value: "barking", label: "Barking" },
  { value: "newham", label: "Newham" },
  { value: "hackney", label: "Hackney" },
  { value: "shoreditch", label: "Shoreditch" },
  { value: "tower-hamlets", label: "Tower Hamlets" },
  { value: "walthamstow", label: "Walthamstow" },
  { value: "leyton", label: "Leyton" },
  { value: "greenwich", label: "Greenwich" },
  { value: "central-london", label: "Central London" },
  { value: "north-london", label: "North London" },
  { value: "south-london", label: "South London" },
  { value: "west-london", label: "West London" },
  { value: "nationwide", label: "Nationwide / Multiple" },
] as const;

interface SeoAuditFormProps {
  className?: string;
  variant?: "default" | "compact";
}

export function SeoAuditForm({ className = "", variant = "default" }: SeoAuditFormProps) {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  
  // Turnstile CAPTCHA
  const { containerRef: turnstileRef, getToken, reset: resetTurnstile } = useTurnstile();

  const toggleArea = (value: string) => {
    setSelectedAreas((prev) =>
      prev.includes(value)
        ? prev.filter((a) => a !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const businessName = (formData.get("businessName") as string)?.trim();
    const businessType = (formData.get("businessType") as string) || "";
    const websiteUrl = (formData.get("websiteUrl") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const phone = (formData.get("phone") as string)?.trim() || "";
    
    // Validation
    if (!businessName) {
      toast({
        title: "Business name required",
        description: "Please enter your business name.",
        variant: "destructive",
      });
      return;
    }
    
    if (!businessType) {
      toast({
        title: "Business type required",
        description: "Please select your business type.",
        variant: "destructive",
      });
      return;
    }
    
    if (!websiteUrl) {
      toast({
        title: "Website URL required",
        description: "Please enter your website URL so we can review it.",
        variant: "destructive",
      });
      return;
    }
    
    // Basic URL validation
    const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/i;
    if (!urlPattern.test(websiteUrl)) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid website URL (e.g., example.com or https://example.com)",
        variant: "destructive",
      });
      return;
    }
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    if (selectedAreas.length === 0) {
      toast({
        title: "Target areas required",
        description: "Please select at least one target area.",
        variant: "destructive",
      });
      return;
    }
    
    // Get Turnstile token
    const token = getToken();
    if (!token) {
      toast({
        title: "Verification required",
        description: "Please complete the security verification.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/seo-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessName,
          businessType,
          websiteUrl,
          email,
          phone,
          targetAreas: selectedAreas,
          turnstileToken: token,
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to submit audit request");
      }
      
      const responseData = await response.json().catch(() => ({ ok: true }));
      
      // Success!
      setShowConfetti(true);
      
      toast({
        title: "Audit request received! 🎉",
        description: `We'll review ${websiteUrl} and send your free SEO audit within 24 hours.${responseData.auditId ? ` Reference: ${responseData.auditId}` : ""}`,
        duration: 8000,
      });
      
      // Reset form
      form.reset();
      setSelectedAreas([]);
      resetTurnstile();
      
    } catch (error) {
      console.error("SEO audit form error:", error);
      toast({
        title: "Something went wrong",
        description: error instanceof Error ? error.message : "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isCompact = variant === "compact";

  return (
    <>
      <ConfettiEffect trigger={showConfetti} onComplete={() => setShowConfetti(false)} />
      
      <Card className={`border-2 border-primary/20 shadow-lg ${className}`}>
        <CardContent className={isCompact ? "p-5" : "p-6 md:p-8"}>
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                Free SEO Audit
              </span>
            </div>
            <h3 className={`font-bold text-secondary ${isCompact ? "text-xl" : "text-2xl"}`}>
              Get Your Free Website Review
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              We'll analyse your site and send you a custom SEO action plan within 24 hours.
            </p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            {/* Business Name + Type */}
            <div className={`grid gap-4 ${isCompact ? "grid-cols-1" : "md:grid-cols-2"}`}>
              <div className="space-y-1.5">
                <label htmlFor="businessName" className="text-sm font-medium text-secondary flex items-center gap-1.5">
                  <Building2 className="h-4 w-4 text-muted-foreground" />
                  Business name *
                </label>
                <input
                  id="businessName"
                  name="businessName"
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                  placeholder="e.g. Smith's Plumbing"
                />
              </div>
              
              <div className="space-y-1.5">
                <label htmlFor="businessType" className="text-sm font-medium text-secondary">
                  Business type *
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                  defaultValue=""
                >
                  <option value="" disabled>Select your industry...</option>
                  {BUSINESS_TYPES.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Website URL */}
            <div className="space-y-1.5">
              <label htmlFor="websiteUrl" className="text-sm font-medium text-secondary flex items-center gap-1.5">
                <Globe className="h-4 w-4 text-muted-foreground" />
                Website URL *
              </label>
              <input
                id="websiteUrl"
                name="websiteUrl"
                type="url"
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                placeholder="e.g. www.yourwebsite.com"
              />
              <p className="text-xs text-muted-foreground">
                Enter your current website so we can review it
              </p>
            </div>

            {/* Email + Phone */}
            <div className={`grid gap-4 ${isCompact ? "grid-cols-1" : "md:grid-cols-2"}`}>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-sm font-medium text-secondary">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                  placeholder="you@company.com"
                />
              </div>
              
              <div className="space-y-1.5">
                <label htmlFor="phone" className="text-sm font-medium text-secondary">
                  Phone (optional)
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                  placeholder="07XXX XXX XXX"
                />
              </div>
            </div>

            {/* Target Areas - Multi-select chips */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                Target areas * <span className="text-xs text-muted-foreground font-normal">(select all that apply)</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {TARGET_AREAS.map((area) => {
                  const isSelected = selectedAreas.includes(area.value);
                  return (
                    <button
                      key={area.value}
                      type="button"
                      onClick={() => toggleArea(area.value)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                        ${isSelected
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "bg-muted text-muted-foreground hover:bg-muted/80 border border-border"
                        }`}
                    >
                      {isSelected && <CheckCircle2 className="h-3.5 w-3.5" />}
                      {area.label}
                    </button>
                  );
                })}
              </div>
              {selectedAreas.length > 0 && (
                <p className="text-xs text-primary">
                  {selectedAreas.length} area{selectedAreas.length > 1 ? "s" : ""} selected
                </p>
              )}
            </div>

            {/* Turnstile CAPTCHA */}
            <div ref={turnstileRef} className="flex justify-center" />

            {/* Submit */}
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Get My Free SEO Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground pt-2">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                100% free, no obligation
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                24-hour turnaround
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                Actionable insights
              </span>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
}

export default SeoAuditForm;
