import { Outlet } from 'react-router-dom';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import DemoModal from '@/components/Modals/DemoModal/DemoModal';
import UploadModal from '@/components/Modals/UploadModal/UploadModal';
import ContactModal from '@/components/Modals/ContactModal/ContactModal';

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      
      {/* Modals */}
      <DemoModal />
      <UploadModal />
      <ContactModal />
    </>
  );
}

export default Layout;

