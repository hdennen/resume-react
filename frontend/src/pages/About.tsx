import { motion } from 'framer-motion';
import { Profile } from '@/components/about/Profile';
import { TechStack } from '@/components/about/TechStack';
import { Separator } from '@/components/ui/separator';

export function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-12"
      >
        <div>
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Passionate about building great products and leading exceptional teams
          </p>
        </div>

        <Profile />

        <Separator className="my-8" />

        <div>
          <h2 className="text-2xl font-semibold mb-8">Technical Expertise</h2>
          <TechStack />
        </div>
      </motion.div>
    </div>
  );
}