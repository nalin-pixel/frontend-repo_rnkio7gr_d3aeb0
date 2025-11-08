import { Scale, User, LogIn } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-gradient-to-b from-black/40 to-transparent backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="group inline-flex items-center gap-2">
          <div className="rounded-md bg-emerald-500/10 p-2 ring-1 ring-emerald-500/30 transition group-hover:bg-emerald-500/20">
            <Scale className="h-5 w-5 text-emerald-400" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-white">LexLink</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <a href="#features" className="transition hover:text-white">Features</a>
          <a href="#how" className="transition hover:text-white">How it works</a>
          <a href="#testimonials" className="transition hover:text-white">Stories</a>
          <a href="#cta" className="transition hover:text-white">Get started</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-white/90 transition hover:text-white">
            <User className="h-4 w-4" />
            For Lawyers
          </button>
          <button className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-emerald-400">
            <LogIn className="h-4 w-4" />
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
}
