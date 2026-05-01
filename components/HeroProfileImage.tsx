import Image from 'next/image';

export function HeroProfileImage() {
  return (
    <div className="relative w-72 h-72 flex items-center justify-center">
      <Image
        src="/assets/img/Motalib_Final.jpg"
        alt="Motalib Hossain"
        width={288}
        height={288}
        className="rounded-full border-4 border-accent-purple shadow-lg object-cover w-72 h-72"
        priority
      />
      {/* Online status dot */}
      <span
        className="absolute left-4 bottom-6 w-7 h-7 bg-green-500 border-4 border-white rounded-full flex items-center justify-center shadow cursor-pointer group"
        title="Available now"
      >
        <span className="sr-only">Available now</span>
        <span className="absolute left-full ml-2 px-3 py-1 rounded bg-dark-800 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg z-10">
          Available now: Open for new opportunities
        </span>
      </span>
    </div>
  );
}
