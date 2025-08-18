import Image from "next/image";

interface Traits {
  Background?: string;
  Body?: string;
  Wings?: string;
  Eyes?: string;
  Mouth?: string;
  Head?: string;
  Coffee?: string;
}

interface NFTRendererProps {
  traits: Traits;
  size?: number;
  className?: string;
}

export default function NFTRenderer({ traits, size = 200, className = "" }: NFTRendererProps) {
  // Layer order: background - body/coffee - wings - eyes - mouth - head
  const layers = [
    { trait: traits.Background, folder: "Background" },
    { trait: traits.Wings, folder: "Wings" },
    { trait: traits.Coffee || traits.Body, folder: traits.Coffee ? "Coffee" : "Body" },
    { trait: traits.Eyes, folder: "Eyes" },
    { trait: traits.Mouth, folder: "Mouth" },
    { trait: traits.Head, folder: "Head" },
  ];

  return (
    <div 
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      {layers.map((layer, index) => {
        if (!layer.trait) return null;
        
        return (
          <Image
            key={`${layer.folder}-${layer.trait}-${index}`}
            src={`/images/traits/${layer.folder}/${layer.trait}.png`}
            alt={`${layer.folder}: ${layer.trait}`}
            width={size}
            height={size}
            className="absolute inset-0 w-full h-full [image-rendering:pixelated]"
            style={{ zIndex: index }}
          />
        );
      })}
    </div>
  );
} 