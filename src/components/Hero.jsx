import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0b0f14]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/s6yT8dStjuvzmMcj/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.12),transparent_60%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-28 md:grid-cols-2 md:py-36">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Find the right lawyer, fast.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 max-w-xl text-lg text-white/70"
          >
            LexLink connects you with verified legal professionals in minutes. Compare expertise, response time, and ratings—all in one modern, secure platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="text"
              placeholder="What do you need help with? (e.g. contract review)"
              className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none backdrop-blur focus:border-emerald-400"
            />
            <button className="rounded-md bg-emerald-500 px-6 py-3 font-semibold text-black transition hover:bg-emerald-400">
              Get free matches
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 flex items-center gap-4 text-sm text-white/60"
          >
            <span>Trusted by 10,000+ clients</span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span>Response in under 5 minutes</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-transparent to-transparent" />
          <img
            src="https://images.unsplash.com/photo-1528744598421-b7b93e12df15?q=80&w=1600&auto=format&fit=crop"
            alt="Lawyer meeting"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
