import Image from 'next/image';

export function SidebarProfile() {
  return (
    <div className="flex flex-col items-center py-8">
      <div className="relative">
        <Image
          src="/assets/img/Motalib_Final.jpg"
          alt="Motalib Hossain"
          width={96}
          height={96}
          className="rounded-full border-4 border-accent-purple shadow-lg"
        />
        {/* Online status dot */}
        <span
          className="absolute left-0 bottom-2 w-5 h-5 bg-green-500 border-2 border-white rounded-full flex items-center justify-center shadow"
          title="Online"
        >
          <span className="sr-only">Online</span>
        </span>
      </div>
      <div className="mt-4 text-center">
        <span className="font-bold text-lg text-white">Motalib Hossain</span>
      </div>
    </div>
  );
}
