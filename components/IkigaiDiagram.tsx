'use client';

interface IkigaiDiagramProps {
  labels?: { passion: string; mission: string; vocation: string; profession: string };
  size?: number;
}

export default function IkigaiDiagram({ labels, size = 380 }: IkigaiDiagramProps) {
  const L = labels || { passion: 'Passion', mission: 'Mission', vocation: 'Vocation', profession: 'Profession' };
  const cx = size / 2, cy = size / 2;
  const r = size * 0.215;
  const d = size * 0.1;

  const circles = [
    { id: 'tl', dx: -d, dy: -d, color: '#d4521a', label: L.passion,    tx: cx - d * 2.5, ty: cy - d * 2.8 },
    { id: 'tr', dx:  d, dy: -d, color: '#3d8f52', label: L.mission,    tx: cx + d * 2.5, ty: cy - d * 2.8 },
    { id: 'bl', dx: -d, dy:  d, color: '#c9a84c', label: L.profession, tx: cx - d * 2.5, ty: cy + d * 2.8 },
    { id: 'br', dx:  d, dy:  d, color: '#3670a8', label: L.vocation,   tx: cx + d * 2.5, ty: cy + d * 2.8 },
  ];

  return (
    <div className="ikigai-float" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
        <defs>
          {circles.map(c => (
            <radialGradient key={c.id} id={`g-${c.id}`} cx="40%" cy="40%" r="60%">
              <stop offset="0%" stopColor={c.color} stopOpacity="0.45" />
              <stop offset="100%" stopColor={c.color} stopOpacity="0.08" />
            </radialGradient>
          ))}
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feComposite in="SourceGraphic" in2="b" operator="over" />
          </filter>
        </defs>

        {/* Outer ambient ring */}
        <circle cx={cx} cy={cy} r={size * 0.42} fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth={size * 0.12} />
        <circle cx={cx} cy={cy} r={size * 0.42} fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth={1} />

        {/* 4 overlapping circles */}
        {circles.map(c => (
          <circle key={c.id}
            cx={cx + c.dx} cy={cy + c.dy} r={r}
            fill={`url(#g-${c.id})`}
            stroke={c.color} strokeWidth={1} strokeOpacity={0.3}
          />
        ))}

        {/* Intersection glows */}
        <circle cx={cx} cy={cy - d * 0.6} r={r * 0.4} fill="rgba(82,184,107,0.06)" />
        <circle cx={cx} cy={cy + d * 0.6} r={r * 0.4} fill="rgba(201,168,76,0.06)" />
        <circle cx={cx - d * 0.6} cy={cy} r={r * 0.4} fill="rgba(212,82,26,0.06)" />
        <circle cx={cx + d * 0.6} cy={cy} r={r * 0.4} fill="rgba(54,112,168,0.06)" />

        {/* Center */}
        <circle cx={cx} cy={cy} r={size * 0.07} fill="rgba(201,168,76,0.18)" stroke="rgba(201,168,76,0.4)" strokeWidth={1} />
        <circle cx={cx} cy={cy} r={size * 0.03} fill="#c9a84c" filter="url(#glow)" />

        {/* Center text */}
        <text x={cx} y={cy - 4} textAnchor="middle"
          fill="#f2ede3" fontSize={size * 0.048}
          fontFamily="Cormorant Garamond, serif" fontStyle="italic" fontWeight="600">
          ikigai
        </text>
        <text x={cx} y={cy + size * 0.052} textAnchor="middle"
          fill="rgba(242,237,227,0.35)" fontSize={size * 0.028}
          fontFamily="Instrument Sans, sans-serif" letterSpacing="0.05em">
          生き甲斐
        </text>

        {/* Labels */}
        {circles.map(c => (
          <text key={c.id} x={c.tx} y={c.ty} textAnchor="middle"
            fill={c.color} fontSize={size * 0.044}
            fontFamily="Cormorant Garamond, serif" fontWeight="600"
            opacity={0.92}>
            {c.label}
          </text>
        ))}
      </svg>
    </div>
  );
}
