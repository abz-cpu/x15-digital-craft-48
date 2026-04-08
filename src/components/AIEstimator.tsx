import React, { useState } from 'react';
import { Sparkles, Send, Loader2, Quote } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface EstimateResponse {
  estimatedTimeline: string;
  recommendedPackage: string;
  keyFeatures: string[];
  approach: string;
}

const AI_ESTIMATOR_FUNCTION_URL = 'https://psnsqzcjyjeeuyuqkzik.supabase.co/functions/v1/ai-estimator';
const AI_ESTIMATOR_PUBLISHABLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzbnNxemNqeWplZXV5dXFremlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY4Nzk2OTMsImV4cCI6MjA4MjQ1NTY5M30.juOzqe1azg1_mP5AYli2kJhzV1SsJItnf5szFxDaq2Y';

export const AIEstimator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState<EstimateResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const handleEstimate = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Please describe your project",
        description: "Tell us what you're looking to build",
        variant: "destructive"
      });
      return;
    }
    
    setLoading(true);
    setResponse(null);

    try {
      const result = await fetch(AI_ESTIMATOR_FUNCTION_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: AI_ESTIMATOR_PUBLISHABLE_KEY,
          Authorization: `Bearer ${AI_ESTIMATOR_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ prompt: prompt.trim() }),
      });

      const data = await result.json().catch(() => ({ error: 'Please try again' }));

      if (!result.ok) {
        throw new Error(data.error || 'Please try again');
      }

      if (data.error) {
        throw new Error(data.error);
      }

      setResponse(data);
      toast({
        title: "Analysis complete!",
        description: "Here's your project breakdown",
      });
    } catch (error) {
      console.error("AI estimation failed", error);
      toast({
        title: "Analysis failed",
        description: error instanceof Error ? error.message : "Please try again",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleEstimate();
    }
  };

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#E6FAF8] via-[#D9F7F4] to-[#CCEFE9] rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 lg:p-12 shadow-2xl relative overflow-hidden border border-primary/20">
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/15 rounded-full blur-[100px] -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/15 rounded-full blur-[80px] -ml-24 -mb-24" />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Icon */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary rounded-2xl flex items-center justify-center text-white mb-6 animate-pulse shadow-lg shadow-primary/30">
              <Sparkles size={28} className="sm:w-8 sm:h-8" />
            </div>
            
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3 sm:mb-4">
              Instant AI Project Analysis
            </h2>
            
            {/* Description */}
            <p className="text-slate-600 mb-8 sm:mb-10 max-w-xl text-sm sm:text-base">
              Tell our AI what you need (e.g., "I need a salon website with booking for 2 staff"), and get an instant professional breakdown.
            </p>
            
            {/* Input and button */}
            <div className="w-full flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
              <input 
                id="ai-estimator-prompt"
                name="ai-estimator-prompt"
                type="text" 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Describe your project idea..."
                className="flex-1 bg-white/80 border border-slate-200 text-slate-900 px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary transition-all text-base sm:text-lg placeholder:text-slate-400"
              />
              <button 
                onClick={handleEstimate}
                disabled={loading}
                className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                {loading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
                <span className="whitespace-nowrap">{loading ? 'Analyzing...' : 'Analyze Now'}</span>
              </button>
            </div>

            {/* Results */}
            {response && (
              <div className="w-full bg-white/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-left border border-white/80 shadow-lg animate-fade-in">
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <div className="mb-5 sm:mb-6">
                      <div className="text-primary text-xs font-bold uppercase tracking-wider mb-2">Recommended Package</div>
                      <div className="text-xl sm:text-2xl font-extrabold text-slate-900">{response.recommendedPackage}</div>
                    </div>
                    <div className="mb-5 sm:mb-6">
                      <div className="text-primary text-xs font-bold uppercase tracking-wider mb-2">Estimated Timeline</div>
                      <div className="text-lg sm:text-xl font-bold text-slate-700">{response.estimatedTimeline}</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-primary text-xs font-bold uppercase tracking-wider mb-2">Key Features</div>
                    <ul className="space-y-2">
                      {response.keyFeatures.map((f: string, i: number) => (
                        <li key={i} className="text-slate-600 flex items-start gap-2 text-sm sm:text-base">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-200">
                  <div className="text-primary text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Quote size={14} /> Our Approach
                  </div>
                  <p className="text-slate-500 leading-relaxed italic text-sm sm:text-base">"{response.approach}"</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
