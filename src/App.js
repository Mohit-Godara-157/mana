import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import MyNav from './components/MyNav';
import HereSection from './components/HereSection';
import FindYour from './components/FindYour';
import FeaturedHomes from './components/FeaturedHomes';
import OwnThejoy from './components/OwnThejoy';
import OwnerPerspectives from './components/OwnerPerspectives';
import DontMissout from './components/DontMissout';
import AsFeatured from './components/AsFeatured';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <div className='heroImage hero_Bg'>
        <MyNav />
        <HereSection />
      </div>
      <FindYour />
      <FeaturedHomes />
      <OwnThejoy />
      <OwnerPerspectives />
      <DontMissout />
      <AsFeatured />
      <Footer />
    </>
  );
  
}

export default App;
