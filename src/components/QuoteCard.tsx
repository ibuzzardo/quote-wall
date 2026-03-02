'use client';

import { Quote } from '@/data/quotes';
import { useState } from 'react';

interface QuoteCardProps {
  quote: Quote;
  isFavorite: boolean;
  onToggleFavorite: (quoteId: string) => void;
  onCopy: (text: string) => void;
}

export default function QuoteCard({ quote, isFavorite, onToggleFavorite, onCopy }: QuoteCardProps): JSX.Element {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleCopy = (): void => {
    const textToCopy = `"${quote.text}" - ${quote.author}`;
    onCopy(textToCopy);
  };

  const handleToggleFavorite = (): void => {
    onToggleFavorite(quote.id);
  };

  return (
    <div
      className="bg-background text-foreground p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-secondary/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCopy}
    >
      <div className="flex justify-between items-start mb-3">
        <span className="text-xs text-muted bg-secondary/20 px-2 py-1 rounded-md">
          {quote.category}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleToggleFavorite();
          }}
          className={`text-lg transition-colors hover:scale-110 transform transition-transform ${
            isFavorite ? 'text-red-500' : 'text-muted hover:text-red-400'
          }`}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      
      <blockquote className="text-foreground mb-3 leading-relaxed">
        "{quote.text}"
      </blockquote>
      
      <div className="flex justify-between items-center">
        <cite className="text-muted text-sm not-italic">
          — {quote.author}
        </cite>
        {isHovered && (
          <span className="text-xs text-muted bg-secondary/20 px-2 py-1 rounded-md">
            Click to copy
          </span>
        )}
      </div>
    </div>
  );
}