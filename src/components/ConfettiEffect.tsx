import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  color: string;
}

interface ConfettiEffectProps {
  trigger: boolean;
  onComplete?: () => void;
}

const COLORS = [
  "hsl(var(--primary))",
  "hsl(var(--accent))",
  "hsl(160, 84%, 45%)", // Teal
  "hsl(142, 76%, 36%)", // Green
  "hsl(48, 96%, 53%)",  // Gold
  "hsl(200, 80%, 55%)", // Sky blue
];

export const ConfettiEffect = ({ trigger, onComplete }: ConfettiEffectProps) => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (trigger && !isActive) {
      setIsActive(true);
      
      // Generate confetti pieces
      const newPieces: ConfettiPiece[] = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100, // Random horizontal position (%)
        delay: Math.random() * 0.3, // Staggered start
        duration: 1.5 + Math.random() * 1, // 1.5-2.5s fall time
        size: 6 + Math.random() * 8, // 6-14px
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }));
      
      setPieces(newPieces);
      
      // Clean up after animation
      const timer = setTimeout(() => {
        setIsActive(false);
        setPieces([]);
        onComplete?.();
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [trigger, isActive, onComplete]);

  if (!isActive || pieces.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[2000] overflow-hidden">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti-fall"
          style={{
            left: `${piece.x}%`,
            top: "-20px",
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            borderRadius: Math.random() > 0.5 ? "50%" : "2px",
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default ConfettiEffect;
