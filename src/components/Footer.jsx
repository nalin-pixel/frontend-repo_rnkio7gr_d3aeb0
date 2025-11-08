import { Scale } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0b0f14] py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="inline-flex items-center gap-2">
            <div className="rounded-md bg-emerald-500/10 p-2 ring-1 ring-emerald-500/30">
              <Scale className="h-5 w-5 text-emerald-400" />
            </div>
            <span className="text-white">LexLink</span>
          </div>

          <p className="text-center text-sm text-white/60 sm:text-right">
            © {new Date().getFullYear()} LexLink. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
