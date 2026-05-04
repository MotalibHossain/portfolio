import Image from 'next/image';

export function SidebarProfile() {
  return (
    <div className="flex flex-col items-center pt-8 pb-6 px-4 border-b border-gray-800">
      <div className="relative">
        <Image
          src="https://github.com/MotalibHossain.png"
          alt="Motalib Hossain"
          width={88}
          height={88}
          className="rounded-full border-4 border-accent-purple shadow-lg object-cover"
        />
        {/* Online status dot - bottom left of image */}
        <span
          className="absolute left-1 bottom-1 w-5 h-5 bg-green-500 border-2 border-dark-900 rounded-full shadow"
          title="Online"
        />
      </div>
      <div className="mt-3 text-center">
        <span className="font-bold text-base text-white block">Motalib Hossain</span>
        <span className="text-xs text-accent-blue mt-0.5 block">Fullstack Web Developer</span>
      </div>
    </div>
  );
}
