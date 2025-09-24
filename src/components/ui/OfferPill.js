// src/components/ui/OfferPill.js

export default function OfferPill({ text, color }) {
    const colorClasses = {
      purple: 'bg-purple-500',
      yellow: 'bg-yellow-400',
      pink: 'bg-pink-500',
      blue: 'bg-blue-500',
      red: 'bg-red-500',
      orange: 'bg-orange-400',
    };
  
    return (
      <div
        className={`${colorClasses[color]} w-full rounded-full py-3 px-6 font-semibold text-white shadow-md`}
      >
        {text}
      </div>
    );
  }