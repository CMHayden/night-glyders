"use client";

import { useState, useEffect } from "react";
import TweetPreview from "@/components/TweetPreview";

interface Tweet {
  id: string;
  username: string;
  handle: string;
  content: string;
  timestamp: string;
  likes: number;
  retweets: number;
  link: string;
  image?: string | null;
}

interface LinkItem {
  title: string;
  description: string;
  url: string;
  icon: string;
}

export default function Resources() {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadTweets();
  }, []);

  const loadTweets = async () => {
    setLoading(true);
    try {
      const response = await fetch('/tweets.json');
      const data = await response.json();
      setTweets(data);
    } catch (error) {
      console.error('Error loading tweets:', error);
    } finally {
      setLoading(false);
    }
  };

  const officialLinks: LinkItem[] = [
    {
      title: "Whitepaper",
      description: "Read our detailed project documentation",
      url: "https://docs.nightglyders.com",
      icon: "📄"
    },
    {
      title: "Marketplace",
      description: "Trade Night Glyders on OpenSea",
      url: "https://opensea.io/collection/nightglyders",
      icon: "🛒"
    },
    {
      title: "GitHub",
      description: "Explore our open-source code",
      url: "https://github.com/nightglyders",
      icon: "💻"
    }
  ];

  const socialLinks: LinkItem[] = [
    {
      title: "Discord",
      description: "Join our community server",
      url: "https://discord.gg/xhbZV4Swg4",
      icon: "discord"
    },
    {
      title: "Twitter / X",
      description: "Follow us for the latest updates",
      url: "https://x.com/nightglyders",
      icon: "𝕏"
    }
  ];

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F1949] to-[#0b1440] text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(64,87,255,0.1),transparent)] pointer-events-none" />
      
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-white font-black [font-size:clamp(36px,6vw,72px)] leading-none mb-4 tracking-wide">
            RESOURCES
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            Everything you need to stay connected with the Night Glyders community
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Official Links Section */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-8">Official Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {officialLinks.map((link, index) => (
                <div
                  key={index}
                  onClick={() => handleLinkClick(link.url)}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 
                           text-center hover:bg-white/10 transition-all cursor-pointer group
                           hover:scale-105 transform"
                >
                  <div className="text-4xl mb-4">{link.icon}</div>
                  <h3 className="font-semibold text-white text-lg mb-2">{link.title}</h3>
                  <p className="text-white/60 text-sm">{link.description}</p>
                  <div className="mt-4 flex items-center justify-center space-x-2 text-blue-400 group-hover:text-blue-300">
                    <span className="text-sm">Visit</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                      <path d="M19 19H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7z"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Social Links Section */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-8">Social Media</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {socialLinks.map((link, index) => (
                                 <div
                   key={index}
                   onClick={() => handleLinkClick(link.url)}
                   className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 
                            text-center hover:bg-white/10 transition-all cursor-pointer group
                            hover:scale-105 transform"
                 >
                   <div className="text-5xl mb-4 flex justify-center">
                     {link.icon === "discord" ? (
                       <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" className="text-[#5865F2]">
                         <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9554 2.4189-2.1568 2.4189Z"/>
                       </svg>
                     ) : (
                       <span>{link.icon}</span>
                     )}
                   </div>
                  <h3 className="font-semibold text-white text-xl mb-2">{link.title}</h3>
                  <p className="text-white/60">{link.description}</p>
                  <div className="mt-6 flex items-center justify-center space-x-2 text-blue-400 group-hover:text-blue-300">
                    <span>Join us</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                      <path d="M19 19H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7z"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Twitter Posts Section */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Latest Updates</h2>
              <button
                onClick={loadTweets}
                disabled={loading}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600
                         rounded-lg font-semibold transition-all text-sm"
              >
                {loading ? 'Loading...' : 'Refresh'}
              </button>
            </div>
            
            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                <p className="mt-4 text-white/60">Loading tweets...</p>
              </div>
            ) : tweets.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {tweets.map((tweet) => (
                  <TweetPreview key={tweet.id} tweet={tweet} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-white/60">No tweets available at the moment.</p>
                <button
                  onClick={loadTweets}
                  className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg 
                           font-semibold transition-all"
                >
                  Try Again
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
