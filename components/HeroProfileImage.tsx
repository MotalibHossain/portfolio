import Image from 'next/image';

export function HeroProfileImage() {
  return (
    <div className="relative w-64 h-64 md:w-72 md:h-72 flex items-center justify-center">
      <Image
        src="https://github.com/MotalibHossain.png"
        alt="Motalib Hossain"
        width={288}
        height={288}
        className="rounded-full border-4 border-accent-purple shadow-2xl object-cover w-64 h-64 md:w-72 md:h-72"
        priority
      />
      {/* Online status dot - bottom left */}
      <div className="absolute left-4 bottom-6 group cursor-pointer">
        <span className="flex w-7 h-7 bg-green-500 border-4 border-dark-900 rounded-full shadow-lg" />
        {/* Tooltip */}
        <span className="absolute left-9 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-dark-800 border border-gray-700 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl z-10 pointer-events-none">
          Available now: Open for new opportunities
        </span>
      </div>
    </div>
  );
}
