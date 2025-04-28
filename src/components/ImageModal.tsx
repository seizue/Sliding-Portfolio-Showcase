import React, { useCallback, useEffect } from 'react';
import { XIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
interface ImageModalProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  projectTitle: string;
}
export function ImageModal({
  images,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
  projectTitle
}: ImageModalProps) {
  // Handle escape key press
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    } else if (event.key === 'ArrowLeft') {
      onPrevious();
    } else if (event.key === 'ArrowRight') {
      onNext();
    }
  }, [onClose, onPrevious, onNext]);
  // Handle click outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  useEffect(() => {
    // Add keyboard event listener
    document.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    return () => {
      // Cleanup
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [handleKeyDown]);
  return <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center" onClick={handleBackdropClick}>
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Close button */}
        <button onClick={e => {
        e.stopPropagation();
        onClose();
      }} className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors" aria-label="Close modal">
          <XIcon size={24} />
        </button>
        {/* Previous button */}
        <button onClick={e => {
        e.stopPropagation();
        onPrevious();
      }} className={`absolute left-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={currentIndex === 0} aria-label="Previous image">
          <ChevronLeftIcon size={24} />
        </button>
        {/* Next button */}
        <button onClick={e => {
        e.stopPropagation();
        onNext();
      }} className={`absolute right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors ${currentIndex === images.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={currentIndex === images.length - 1} aria-label="Next image">
          <ChevronRightIcon size={24} />
        </button>
        {/* Image container */}
        <div className="max-w-[90vw] max-h-[90vh]" onClick={e => e.stopPropagation()}>
          <div className="relative overflow-hidden">
            <img src={images[currentIndex]} alt={`${projectTitle} - Image ${currentIndex + 1}`} className="max-w-full max-h-[80vh] object-contain transition-opacity duration-300" />
          </div>
          {/* Image counter and title */}
          <div className="text-white text-center mt-4 space-y-2">
            <h3 className="text-xl font-medium">{projectTitle}</h3>
            <p className="text-sm opacity-80">
              Image {currentIndex + 1} of {images.length}
            </p>
          </div>
        </div>
      </div>
    </div>;
}