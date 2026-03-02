'use client';

import { useEffect } from 'react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export default function Toast({ message, isVisible, onClose }: ToastProps): JSX.Element | null {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-accent text-white p-3 rounded-md shadow-lg z-50 animate-in slide-in-from-bottom-2 duration-300">
      <div className="flex items-center gap-2">
        <span>📋</span>
        <span>{message}</span>
        <button
          onClick={onClose}
          className="ml-2 text-white/80 hover:text-white transition-colors"
          aria-label="Close toast"
        >
          ✕
        </button>
      </div>
    </div>
  );
}