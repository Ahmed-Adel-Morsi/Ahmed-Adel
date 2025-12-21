import AdminSidebar from '@/components/AdminSidebar';
import AdminStats from '@/components/AdminStats';
import AdminProjectsTable from '@/components/AdminProjectsTable';
import AdminCharts from '@/components/AdminCharts';
import { useLanguage } from '@/contexts/LanguageContext';

const AdminDashboard = () => {
  const { direction } = useLanguage();
  
  return (
    <div className={`min-h-screen bg-background flex ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}>
      <AdminSidebar />
      
      <main className="flex-1 p-6 lg:p-8 overflow-auto">
        <div className="max-w-7xl mx-auto space-y-6">
          <AdminStats />
          <AdminProjectsTable />
          <AdminCharts />
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
