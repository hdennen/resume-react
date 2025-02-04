import { motion } from 'framer-motion';
import { achievements } from '@/lib/data';

interface Achievement {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export function Profile() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="prose prose-neutral dark:prose-invert max-w-none"
      >
        <p className="text-xl text-muted-foreground">
          As a Technical Leader with over a decade of experience, I specialize in building
          scalable applications and leading high-performance development teams. My approach
          combines technical expertise with strategic thinking to deliver exceptional results.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {(achievements as Achievement[]).slice(0, 3).map((achievement, index) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="flex flex-col items-center text-center p-6 bg-card rounded-lg border"
          >
            <achievement.icon className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
            <p className="text-sm text-muted-foreground">{achievement.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}