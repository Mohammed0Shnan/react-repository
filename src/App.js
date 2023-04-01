import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactQueryDevtools } from 'react-query/devtools'
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import PortolioSection from './components/PortfolioSection';
import ReviewSection from './components/ReviewSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ServiceDetails } from './components/ServiceDetails';
import { Route, Router, Routes } from 'react-router-dom';
import SocialLinks from './components/SocialLinks';
import OnMoveMouse from './components/OnMoveMouse';


const queryClient = new QueryClient

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<Root />} ></Route>
          <Route path='/service-details/:serviceId' element={<ServiceDetails />} ></Route>
        </Routes>
      </QueryClientProvider>
    </>
  )
}

function Root() {
  return <>
    <div className='body'>
      <OnMoveMouse />
      <SocialLinks />
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <PortolioSection />
      <ContactSection />
      <Footer />
      {/* <ReactQueryDevtools initialIsOpen={false} position='bottom-right' /> */}
    </div>

  </>
}


export default App;

