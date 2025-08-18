"use client";

import { useState, useEffect } from "react";
import NFTRenderer from "@/components/NFTRenderer";

interface Traits {
  Background?: string;
  Body?: string;
  Wings?: string;
  Eyes?: string;
  Mouth?: string;
  Head?: string;
  Coffee?: string;
}

export default function IPPack() {
  const [id, setId] = useState("");
  const [getPack, setGetPack] = useState(false);
  const [metadata, setMetadata] = useState<Traits | null>(null);

  const handleSubmit = () => {
    setGetPack(true);
  };

  useEffect(() => {
    if (getPack) {
      // Load metadata.json when NFT generation is triggered
      fetch('/metadata.json')
        .then(response => response.json())
        .then(data => setMetadata(data))
        .catch(error => console.error('Error loading metadata:', error));
    }
  }, [getPack]);

  // Generate the four different versions
  const generateVersions = () => {
    if (!metadata) return [];

    return [
      {
        title: "Original",
        description: "As defined in metadata",
        traits: metadata,
      },
      {
        title: "No Background", 
        description: "Original without background",
        traits: { ...metadata, Background: undefined },
      },
      {
        title: "Dawn Sky",
        description: "With Dawn Sky background", 
        traits: { ...metadata, Background: "Dawn Sky" },
      },
      {
        title: "Day Sky",
        description: "With Day Sky background", 
        traits: { ...metadata, Background: "Day Sky" },
      },
      {
        title: "Forest Dawn",
        description: "With Forest Dawn background", 
        traits: { ...metadata, Background: "Forest Dawn" },
      },
      {
        title: "Night Sky",
        description: "With Night Sky background", 
        traits: { ...metadata, Background: "Night Sky" },
      },
      {
        title: "Night Sky 2",
        description: "With Night Sky 2 background", 
        traits: { ...metadata, Background: "Night Sky 2" },
      },
      {
        title: "Sky Clouds",
        description: "With Sky Clouds background", 
        traits: { ...metadata, Background: "Sky Clouds" },
      },
      {
        title: "Coffee Version",
        description: "Coffee instead of body",
        traits: { 
          ...metadata, 
          Body: undefined,
          Coffee: metadata.Body // Use the same trait name but from Coffee folder
        },
      },
    ];
  };

  const versions = generateVersions();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F1949] to-[#0b1440] text-white">
      {/* Background Pattern - subtle gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(64,87,255,0.1),transparent)] pointer-events-none" />
      
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-white font-black [font-size:clamp(36px,6vw,72px)] leading-none mb-4 tracking-wide">
            IP-PACK
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            Enter an ID to access your IP pack information
          </p>
        </div>

        {/* Main Content */}
        <div className={`mx-auto transition-all duration-500 ${getPack && metadata ? 'max-w-6xl' : 'max-w-md'}`}>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
            <div className="space-y-6">
              {/* ID Input */}
              <div>
                <label htmlFor="id-input" className="block text-sm font-medium text-white/90 mb-3">
                  ID
                </label>
                <input
                  id="id-input"
                  type="text"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  placeholder="Enter your ID..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg 
                           text-white placeholder-white/50 focus:outline-none focus:ring-2 
                           focus:ring-blue-400 focus:border-transparent transition-all
                           hover:border-white/30"
                />
              </div>

              <button
                type="button"
                disabled={!id.trim()}
                onClick={() => {
                  handleSubmit();
                }}
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 
                         hover:from-blue-600 hover:to-purple-700 disabled:from-gray-600 
                         disabled:to-gray-700 disabled:cursor-not-allowed rounded-lg 
                         font-semibold text-white transition-all transform 
                         hover:scale-[1.02] active:scale-[0.98] shadow-lg
                         disabled:hover:scale-100"
              >
                {id.trim() ? 'Access IP Pack' : 'Enter ID to Continue'}
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-white/60 text-sm">
              Need help finding your ID? Contact support for assistance.
            </p>
          </div>

          {getPack && metadata && (
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-center mb-8">Your NFT Variations</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {versions.map((version, index) => (
                  <div 
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all"
                  >
                    <h3 className="font-semibold mb-2 text-white text-lg">{version.title}</h3>
                    <p className="text-sm text-white/60 mb-6">{version.description}</p>
                    <div className="flex justify-center">
                      <NFTRenderer 
                        traits={version.traits}
                        size={180}
                        className="drop-shadow-2xl hover:scale-105 transition-transform"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
