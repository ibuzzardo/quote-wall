'use client';

import { useState, useEffect, useMemo } from 'react';
import { quotes, Quote, Category } from '@/data/quotes';
import QuoteCard from '@/components/QuoteCard';
import CategoryFilter from '@/components/CategoryFilter';
import Toast from '@/components/Toast';

type FilterType = Category | 'ALL' | 'FAVORITES';

export default function HomePage(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<FilterType>('ALL');
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [toastMessage, setToastMessage] = useState<string>('');
  const [showToast, setShowToast] = useState<boolean>(false);

  // Load favorites from localStorage on mount
  useEffect(() => {
    try {
      const savedFavorites = localStorage.getItem('quote-wall-favorites');
      if (savedFavorites) {
        setFavorites(new Set(JSON.parse(savedFavorites)));
      }
    } catch (error) {
      console.error('Error loading favorites from localStorage:', error);
    }
  }, []);

  // Save favorites to localStorage whenever favorites change
  useEffect(() => {
    try {
      localStorage.setItem('quote-wall-favorites', JSON.stringify(Array.from(favorites)));
    } catch (error) {
      console.error('Error saving favorites to localStorage:', error);
    }
  }, [favorites]);

  // Get daily quote (same quote each day)
  const dailyQuote = useMemo((): Quote => {
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
    const index = dayOfYear % quotes.length;
    return quotes[index];
  }, []);

  // Filter quotes based on selected category
  const filteredQuotes = useMemo((): Quote[] => {
    if (selectedCategory === 'ALL') {
      return quotes;
    }
    if (selectedCategory === 'FAVORITES') {
      return quotes.filter(quote => favorites.has(quote.id));
    }
    return quotes.filter(quote => quote.category === selectedCategory);
  }, [selectedCategory, favorites]);

  const handleToggleFavorite = (quoteId: string): void => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(quoteId)) {
        newFavorites.delete(quoteId);
      } else {
        newFavorites.add(quoteId);
      }
      return newFavorites;
    });
  };

  const handleCopyQuote = async (text: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
      setToastMessage('Quote copied to clipboard!');
      setShowToast(true);
    } catch (error) {
      console.error('Failed to copy quote:', error);
      setToastMessage('Failed to copy quote');
      setShowToast(true);
    }
  };

  const handleCloseToast = (): void => {
    setShowToast(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="p-6 max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Quote Wall</h1>
          <p className="text-muted">Daily inspiration at your fingertips</p>
        </header>

        {/* Featured Daily Quote */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Quote of the Day</h2>
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
            <QuoteCard
              quote={dailyQuote}
              isFavorite={favorites.has(dailyQuote.id)}
              onToggleFavorite={handleToggleFavorite}
              onCopy={handleCopyQuote}
            />
          </div>
        </section>

        {/* Category Filter */}
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          favoritesCount={favorites.size}
        />

        {/* Quotes Grid */}
        <section>
          {selectedCategory === 'FAVORITES' && filteredQuotes.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">💝</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No favorites yet</h3>
              <p className="text-muted">Click the heart icon on any quote to add it to your favorites!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredQuotes.map((quote) => (
                <QuoteCard
                  key={quote.id}
                  quote={quote}
                  isFavorite={favorites.has(quote.id)}
                  onToggleFavorite={handleToggleFavorite}
                  onCopy={handleCopyQuote}
                />
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        isVisible={showToast}
        onClose={handleCloseToast}
      />
    </div>
  );
}