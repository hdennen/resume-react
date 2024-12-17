import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ROUTES, SOCIAL_LINKS } from '@/lib/constants';

export function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Technical Leader &
            <span className="text-primary"> Full Stack Developer</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            Building scalable solutions and leading high-performance teams. Specialized in
            modern web technologies and distributed systems.
          </p>
          <div className="mt-10 flex gap-4">
            <Button asChild>
              <Link to={ROUTES.PROJECTS}>
                View Projects <FaArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to={ROUTES.CONTACT}>Get in Touch</Link>
            </Button>
          </div>
          <div className="mt-10 flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a
                href={SOCIAL_LINKS.GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href={SOCIAL_LINKS.LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </Button>
            
            <Button variant="ghost" size="icon" asChild>
              <a
                href={SOCIAL_LINKS.MEDIUM}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Medium"
              >
                <FaMedium className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}