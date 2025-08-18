import Image from "next/image";

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

interface TweetPreviewProps {
  tweet: Tweet;
}

export default function TweetPreview({ tweet }: TweetPreviewProps) {
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleTweetClick = () => {
    window.open(tweet.link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      onClick={handleTweetClick}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 
                 hover:bg-white/10 transition-all cursor-pointer group"
    >
      {/* Header */}
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 
                        rounded-full flex items-center justify-center mr-3">
          <span className="text-white font-bold text-lg">
            {tweet.username.charAt(0).toUpperCase()}
          </span>
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <h3 className="font-semibold text-white">{tweet.username}</h3>
            <span className="text-white/60 text-sm">{tweet.handle}</span>
          </div>
          <p className="text-white/60 text-sm">{formatTimestamp(tweet.timestamp)}</p>
        </div>
        {/* Twitter/X Icon */}
        <div className="text-white/60 group-hover:text-white transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="mb-4">
        <p className="text-white leading-relaxed whitespace-pre-line">
          {tweet.content}
        </p>
      </div>

      {/* Image if present */}
      {tweet.image && (
        <div className="mb-4 rounded-lg overflow-hidden">
          <Image
            src={tweet.image}
            alt="Tweet image"
            width={400}
            height={300}
            className="w-full h-auto [image-rendering:pixelated]"
          />
        </div>
      )}
    </div>
  );
} 