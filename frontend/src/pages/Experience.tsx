import { motion } from 'framer-motion';
import { experiences } from '@/lib/data';
import { ExperienceCard } from '@/components/experience/ExperienceCard';

export function Experience() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-12"
      >
        <div>
          <h1 className="text-4xl font-bold">Experience</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            A journey of technical leadership, innovation, and impactful solutions
          </p>
        </div>

        <div className="grid gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}