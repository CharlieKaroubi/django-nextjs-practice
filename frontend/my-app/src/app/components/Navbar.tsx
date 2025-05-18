import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 py-4 px-6 flex justify-between items-center font-serif text-base bg-white sticky top-0 z-50">
      <div className="text-lg font-semibold text-gray-900 tracking-tight">
        <Link href="/">Blog</Link>
      </div>
      <div className="space-x-6 text-gray-600 text-sm">
        <Link href="/about" className="hover:text-black transition">About</Link>
        <Link href="/prize" className="hover:text-black transition">Prize</Link>
        <Link href="/submit" className="hover:text-black transition">Submit</Link>
      </div>
    </nav>
  );
}