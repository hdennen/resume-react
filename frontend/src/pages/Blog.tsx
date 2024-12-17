import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getMediumPosts } from '@/lib/api/medium';

interface BlogPost {
  title: string;
  pubDate: string;
  link: string;
  thumbnail: string;
  description: string;
}

export function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const mediumPosts = await getMediumPosts('hazterisk');
      setPosts(mediumPosts);
      setIsLoading(false);
    }
    fetchPosts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-12"
      >
        <div>
          <h1 className="text-4xl font-bold">Blog</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Thoughts, ideas, and technical writings
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-64 bg-muted rounded-lg animate-pulse"
              ></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <motion.a
                key={post.link}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-lg border bg-card hover:border-primary transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.thumbnail || '/blog-placeholder.jpg'}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {new Date(post.pubDate).toLocaleDateString()}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                    {post.description.replace(/<[^>]*>/g, '')}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
} 