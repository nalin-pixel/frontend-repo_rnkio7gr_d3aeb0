import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Star, MessageSquare } from 'lucide-react';

const items = [
  {
    icon: ShieldCheck,
    title: 'Verified professionals',
    desc: 'Every lawyer on our platform is identity and license verified for your peace of mind.'
  },
  {
    icon: Clock,
    title: 'Fast responses',
    desc: 'Post your need and get qualified responses in minutes, not days.'
  },
  {
    icon: Star,
    title: 'Transparent reviews',
    desc: 'Make confident decisions with rich client reviews and case outcomes.'
  },
  {
    icon: MessageSquare,
    title: 'Private messaging',
    desc: 'Secure end-to-end chat to discuss details before you hire.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative bg-[#0b0f14] py-24">
      <div className="pointer-events-none absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-black/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold text-white sm:text-4xl"
        >
          Why users choose LexLink
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-emerald-400/40 hover:bg-white/10"
            >
              <div className="mb-4 inline-flex rounded-md bg-emerald-500/10 p-2 ring-1 ring-emerald-500/30">
                <item.icon className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
