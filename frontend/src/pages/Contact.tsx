import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { decodeEmail } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

export function Contact() {
  const { toast } = useToast();
  const [isEmailVisible, setIsEmailVisible] = useState(false);
  const encodedEmail = 'moc.nennedyrrah@h'; // Reversed email

  const handleRevealEmail = () => {
    setIsEmailVisible(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(decodeEmail(encodedEmail));
    toast({
      title: 'Email copied to clipboard',
      duration: 2000,
    });
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center"
      >
        <Mail className="w-16 h-16 mx-auto mb-8 text-primary" />
        <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
        <p className="text-xl text-muted-foreground mb-8">
          I'm always open to discussing new opportunities and interesting projects.
        </p>
        
        <div className="space-y-6">
          <div className="inline-block">
            {isEmailVisible ? (
              <div className="flex items-center gap-4 text-xl font-medium">
                <span>{decodeEmail(encodedEmail)}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleCopyEmail}
                  className="hover:text-primary"
                >
                  <Copy className="h-5 w-5" />
                </Button>
              </div>
            ) : (
              <Button
                variant="outline"
                size="lg"
                onClick={handleRevealEmail}
                className="text-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Reveal Email Address
              </Button>
            )}
          </div>
          
          <p className="text-sm text-muted-foreground">
            The email address is hidden to prevent spam. Click to reveal.
          </p>
        </div>
      </motion.div>
    </div>
  );
}