import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const projects = [
  { id: 1, titleKey: 'ecommerce', status: 'published' },
  { id: 2, titleKey: 'taskManager', status: 'draft' },
  { id: 3, titleKey: 'portfolioWebsite', status: 'published' },
];

const AdminProjectsTable = () => {
  const { t, direction } = useLanguage();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="glass-card p-6"
    >
      <div className={`flex items-center justify-between mb-6 ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}>
        <h3 className="font-display font-semibold text-lg">{t('manageProjects')}</h3>
        <Button variant="outline" size="sm" className="rounded-full">
          + {t('new')}
        </Button>
      </div>
      
      <Table>
        <TableHeader>
          <TableRow className="border-border">
            <TableHead className={direction === 'rtl' ? 'text-right' : 'text-left'}>{t('title')}</TableHead>
            <TableHead className={direction === 'rtl' ? 'text-right' : 'text-left'}>{t('status')}</TableHead>
            <TableHead className={direction === 'rtl' ? 'text-right' : 'text-left'}>{t('actions')}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map(project => (
            <TableRow key={project.id} className="border-border">
              <TableCell className="font-medium">{t(project.titleKey)}</TableCell>
              <TableCell>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'published' 
                    ? 'bg-primary/20 text-primary' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {t(project.status)}
                </span>
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="secondary" size="sm" className="rounded-md text-xs">
                    {t('edit')}
                  </Button>
                  <Button variant="destructive" size="sm" className="rounded-md text-xs">
                    {t('delete')}
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </motion.div>
  );
};

export default AdminProjectsTable;
