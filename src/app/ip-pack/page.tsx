"use client";

import { useState } from "react";

export default function IPPack() {
  const [id, setId] = useState("");

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

        {/* Main Content Card */}
        <div className="max-w-md mx-auto">
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

              {/* Submit Button */}
              <button
                type="button"
                disabled={!id.trim()}
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
        </div>
      </div>
    </div>
  );
}
