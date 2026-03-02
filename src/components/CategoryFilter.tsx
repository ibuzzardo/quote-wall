'use client';

import { Category } from '@/data/quotes';

interface CategoryFilterProps {
  selectedCategory: Category | 'ALL' | 'FAVORITES';
  onCategoryChange: (category: Category | 'ALL' | 'FAVORITES') => void;
  favoritesCount: number;
}

export default function CategoryFilter({ selectedCategory, onCategoryChange, favoritesCount }: CategoryFilterProps): JSX.Element {
  const categories: Array<{ key: Category | 'ALL' | 'FAVORITES'; label: string }> = [
    { key: 'ALL', label: 'All Quotes' },
    { key: Category.MOTIVATION, label: 'Motivation' },
    { key: Category.WISDOM, label: 'Wisdom' },
    { key: Category.HUMOR, label: 'Humor' },
    { key: Category.LIFE, label: 'Life' },
    { key: 'FAVORITES', label: `Favorites (${favoritesCount})` },
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map((category) => (
        <button
          key={category.key}
          onClick={() => onCategoryChange(category.key)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors focus:ring-2 focus:ring-primary/50 ${
            selectedCategory === category.key
              ? 'bg-primary text-white'
              : 'bg-secondary/20 text-foreground hover:bg-secondary/30'
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}