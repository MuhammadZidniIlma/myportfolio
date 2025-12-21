import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-transparent flex flex-col items-center justify-center text-center text-white px-6">
      
      <h1 className="text-7xl font-bold mb-4">404</h1>
      
      <p className="text-gray-400 text-lg mb-8">
        Oops! Halaman yang kamu cari tidak ditemukan.
      </p>

      <Link
        href="/"
        className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
      >
        Kembali ke Home
      </Link>

    </div>
  );
}
