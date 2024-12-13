import { motion } from 'framer-motion';
import { projects } from '@/lib/data';
import { ProjectCard } from '@/components/projects/ProjectCard';

export function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-12"
      >
        <div>
          <h1 className="text-4xl font-bold">Projects</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            A collection of open source projects.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Recent Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        {otherProjects.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">All Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index + featuredProjects.length}
                />
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}