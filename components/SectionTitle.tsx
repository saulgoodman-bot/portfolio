import { motion } from 'framer-motion';

type Props = { title: string; subtitle?: string; id: string };

export function SectionTitle({ title, subtitle, id }: Props) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      className="mb-10 text-center"
    >
      <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">{title}</h2>
      {subtitle ? <p className="mt-3 text-muted max-w-2xl mx-auto">{subtitle}</p> : null}
    </motion.div>
  );
}
