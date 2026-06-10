// Route-transition fallback rendered by <Suspense> while a lazy page chunk
// loads. Suspense unmounts it the instant the chunk is ready, so there are no
// artificial delays here. The 150ms fade-in delay prevents a flash on fast
// connections where the chunk resolves almost immediately.
export const PremiumLoading = () => (
  <div
    className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-7 bg-background opacity-0 animate-[premium-loading-in_0.3s_ease-out_0.15s_forwards]"
    role="status"
    aria-label="Loading page"
  >
    <div className="relative h-12 w-12">
      <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-primary animate-spin [animation-duration:0.9s]" />
      <div className="absolute inset-[7px] rounded-full border border-primary/25" />
    </div>
    <p className="font-display text-[13px] font-semibold tracking-[0.32em] text-secondary">
      L&amp;D <span className="text-primary">DIGITAL</span>
    </p>
    <style>{`@keyframes premium-loading-in { to { opacity: 1; } }`}</style>
  </div>
);
