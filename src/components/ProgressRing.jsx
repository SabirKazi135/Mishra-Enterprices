import { useEffect, useState } from 'react';

function ProgressRing({ percent, label }) {
  const circumference = 327;

  const [offset, setOffset] = useState(circumference);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const finalOffset = circumference * (1 - percent / 100);
    setTimeout(() => {
      setOffset(finalOffset);
    }, 50);

    let current = 0;
    const stepTime = 2000 / percent;
    const timer = setInterval(() => {
      current += 1;
      setDisplayValue(current);

      if (current >= percent) {
        clearInterval(timer);
        setDisplayValue(percent);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [percent]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-[120px] w-[120px]">
        <svg
          className="-rotate-90"
          width="120"
          height="120"
          viewBox="0 0 120 120"
        >
          {/* Background ring */}
          <circle
            cx="60"
            cy="60"
            r="52"
            stroke="#E5E7EB"
            strokeWidth="10"
            fill="none"
          />

          {/* Animated ring */}
          <circle
            cx="60"
            cy="60"
            r="52"
            stroke="#030455"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: 'stroke-dashoffset 2s ease-out' }}
          />
        </svg>

        {/* Animated number */}
        <span className="absolute inset-0 flex items-center justify-center text-xl font-semibold">
          {displayValue}%
        </span>
      </div>

      <p className="mt-3 text-sm font-medium">{label}</p>
    </div>
  );
}

export default ProgressRing;
