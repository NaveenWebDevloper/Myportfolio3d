import React, { useState } from 'react';

interface FolderProps {
  color?: string;
  size?: number;
  items?: React.ReactNode[];
  className?: string;
}

const darkenColor = (hex: string, percent: number): string => {
  let color = hex.startsWith('#') ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color
      .split('')
      .map(c => c + c)
      .join('');
  }
  const num = parseInt(color, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
};

const Folder: React.FC<FolderProps> = ({ color = '#0EA5E9', size = 1, items = [], className = '' }) => {
  const maxItems = 3;
  const papers = items.slice(0, maxItems);
  while (papers.length < maxItems) {
    papers.push(null);
  }

  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [paperOffsets, setPaperOffsets] = useState<{ x: number; y: number }[]>(
    Array.from({ length: maxItems }, () => ({ x: 0, y: 0 }))
  );

  const folderBackColor = darkenColor(color, 0.15);
  const paper1 = '#1F2937'; // Slate-800 for GitHub
  const paper2 = '#0A66C2'; // LinkedIn Blue
  const paper3 = '#E1306C'; // Instagram Pink/Gradient base

  const handleClick = (e: React.MouseEvent) => {
    // Prevent event bubble issues
    e.stopPropagation();
    setOpen(prev => !prev);
    if (open) {
      setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
    }
  };

  const handlePaperMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    if (!open) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) * 0.15;
    const offsetY = (e.clientY - centerY) * 0.15;
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: offsetX, y: offsetY };
      return newOffsets;
    });
  };

  const handlePaperMouseLeave = (index: number) => {
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: 0, y: 0 };
      return newOffsets;
    });
  };

  const folderStyle: React.CSSProperties = {
    '--folder-color': color,
    '--folder-back-color': folderBackColor,
    '--paper-1': paper1,
    '--paper-2': paper2,
    '--paper-3': paper3
  } as React.CSSProperties;

  const scaleStyle = { transform: `scale(${size})` };

  const getOpenTransform = (index: number) => {
    // Scatter the papers on open
    if (index === 0) return 'translate(-125%, -80%) rotate(-15deg)';
    if (index === 1) return 'translate(25%, -80%) rotate(15deg)';
    if (index === 2) return 'translate(-50%, -115%) rotate(3deg)';
    return '';
  };

  return (
    <div style={scaleStyle} className={`relative flex items-center justify-center ${className}`.trim()}>
      {/* Invisible spacer wrapper to make hover interaction area stable */}
      <div
        className={`group relative transition-all duration-300 ease-out cursor-pointer select-none ${
          !open ? 'hover:-translate-y-2' : ''
        }`}
        style={{
          ...folderStyle,
          transform: open ? 'translateY(-8px)' : undefined
        }}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          if (!open) {
            setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
          }
        }}
      >
        {/* Back of the Folder */}
        <div
          className="relative w-[110px] h-[85px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] shadow-lg transition-colors duration-300"
          style={{ backgroundColor: folderBackColor }}
        >
          {/* Folder Tab */}
          <span
            className="absolute z-0 bottom-[98%] left-0 w-[35px] h-[12px] rounded-tl-[6px] rounded-tr-[6px]"
            style={{ backgroundColor: folderBackColor }}
          ></span>

          {/* Papers */}
          {papers.map((item, i) => {
            let sizeClasses = '';
            if (i === 0) sizeClasses = open ? 'w-[75%] h-[85%]' : 'w-[75%] h-[80%]';
            if (i === 1) sizeClasses = open ? 'w-[80%] h-[85%]' : 'w-[80%] h-[75%]';
            if (i === 2) sizeClasses = open ? 'w-[85%] h-[85%]' : 'w-[85%] h-[70%]';

            const transformStyle = open
              ? `${getOpenTransform(i)} translate(${paperOffsets[i].x}px, ${paperOffsets[i].y}px)`
              : undefined;

            return (
              <div
                key={i}
                onMouseMove={e => handlePaperMouseMove(e, i)}
                onMouseLeave={() => handlePaperMouseLeave(i)}
                onClick={(e) => {
                  if (!open) {
                    // Open the folder first instead of clicking the link inside
                    e.stopPropagation();
                    setOpen(true);
                  }
                }}
                className={`absolute z-20 bottom-[12%] left-1/2 transition-all duration-300 ease-in-out origin-center ${
                  !open 
                    ? 'transform -translate-x-1/2 translate-y-[10%] group-hover:translate-y-[-5px]' 
                    : 'hover:scale-108 hover:z-40 shadow-xl'
                } ${sizeClasses}`}
                style={{
                  ...(!open ? {} : { transform: transformStyle }),
                  backgroundColor: i === 0 ? paper1 : i === 1 ? paper2 : paper3,
                  borderRadius: open || isHovered ? '14px' : '8px',
                  boxShadow: !open ? '0 2px 4px rgba(0,0,0,0.1)' : undefined
                }}
              >
                {item}
              </div>
            );
          })}

          {/* Front of the Folder: Flap Left Squeeze */}
          <div
            className={`absolute z-30 w-full h-full origin-bottom transition-all duration-300 ease-in-out ${
              !open ? 'group-hover:[transform:skew(12deg)_scaleY(0.7)]' : ''
            }`}
            style={{
              backgroundColor: color,
              borderRadius: '5px 10px 10px 10px',
              ...(open && { transform: 'skew(12deg) scaleY(0.7)' })
            }}
          ></div>

          {/* Front of the Folder: Flap Right Squeeze */}
          <div
            className={`absolute z-30 w-full h-full origin-bottom transition-all duration-300 ease-in-out ${
              !open ? 'group-hover:[transform:skew(-12deg)_scaleY(0.7)]' : ''
            }`}
            style={{
              backgroundColor: color,
              borderRadius: '5px 10px 10px 10px',
              ...(open && { transform: 'skew(-12deg) scaleY(0.7)' })
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Folder;
