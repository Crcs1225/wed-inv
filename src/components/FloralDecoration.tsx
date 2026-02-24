type FloralCornerProps = {
  className?: string;
  size?: number;
  flip?: boolean;
};

type FloralDividerProps = {
  className?: string;
};

export const FloralCorner: React.FC<FloralCornerProps> = ({ className = "", size = 150, flip = false }) => {
  const transform = flip ? `translate(${size} 0) scale(-1 1)` : undefined;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 150 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g transform={transform}>
        <path d="M4 62C36 62 64 36 64 4" stroke="#E5C99F" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 76C49 76 78 48 78 12" stroke="#E5C99F" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
        <path
          d="M24 48C30 38 43 35 53 41C61 46 64 57 59 66C54 75 43 79 34 74C24 68 20 57 24 48Z"
          fill="#B86B7E"
          opacity="0.55"
        />
        <path
          d="M46 27C52 20 62 19 69 25C75 30 76 39 71 46C66 53 57 54 50 49C43 43 41 34 46 27Z"
          fill="#D8B07A"
          opacity="0.6"
        />
        <circle cx="33" cy="33" r="2.3" fill="#EAD0AA" />
        <circle cx="58" cy="58" r="1.9" fill="#EAD0AA" />
        <path d="M5 95C18 92 32 96 40 108" stroke="#E5C99F" strokeWidth="1.2" strokeLinecap="round" />
      </g>
    </svg>
  );
};

export const FloralDivider: React.FC<FloralDividerProps> = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 340 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 18H134" stroke="#D4A853" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M206 18H322" stroke="#D4A853" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="170" cy="18" r="7" fill="#F5E6D0" />
      <path d="M170 10C175 14 176 21 170 26C164 21 165 14 170 10Z" fill="#C27A8A" />
      <path d="M158 18C163 15 166 15 170 18C174 21 177 21 182 18" stroke="#D4A853" strokeWidth="1.2" />
      <path d="M151 15C153 12 157 12 159 15C161 18 160 21 157 23" stroke="#E8C797" strokeWidth="1.1" />
      <path d="M189 15C187 12 183 12 181 15C179 18 180 21 183 23" stroke="#E8C797" strokeWidth="1.1" />
    </svg>
  );
};
