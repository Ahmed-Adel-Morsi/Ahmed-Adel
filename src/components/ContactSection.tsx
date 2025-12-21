import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const ContactSection = () => {
  const { t, direction } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: direction === 'rtl' ? 'تم الإرسال!' : 'Message sent!',
      description: direction === 'rtl' 
        ? 'شكراً لتواصلك معي. سأرد عليك قريباً.' 
        : 'Thanks for reaching out. I\'ll get back to you soon.',
    });
    
    setIsSubmitting(false);
  };
  
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12"
        >
          <h2 className={`text-3xl md:text-4xl font-display font-bold mb-8 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
            {t('contactTitle')}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={`block text-sm font-medium text-muted-foreground mb-2 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                  {t('yourName')}
                </label>
                <Input 
                  type="text" 
                  required 
                  className="rounded-lg bg-secondary/50 border-border focus:border-primary"
                  dir={direction}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium text-muted-foreground mb-2 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                  {t('yourEmail')}
                </label>
                <Input 
                  type="email" 
                  required 
                  className="rounded-lg bg-secondary/50 border-border focus:border-primary"
                  dir="ltr"
                />
              </div>
            </div>
            
            <div>
              <label className={`block text-sm font-medium text-muted-foreground mb-2 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                {t('message')}
              </label>
              <Textarea 
                rows={5} 
                required 
                className="rounded-lg bg-secondary/50 border-border focus:border-primary resize-none"
                dir={direction}
              />
            </div>
            
            <Button 
              type="submit" 
              size="lg" 
              disabled={isSubmitting}
              className={`glow-button rounded-full px-8 ${direction === 'rtl' ? 'float-left' : ''}`}
            >
              {isSubmitting ? '...' : t('sendMessage')}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
