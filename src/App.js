import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactQueryDevtools } from 'react-query/devtools'
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import PortolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Router, Routes } from 'react-router-dom';
import SocialLinks from './components/SocialLinks';
import ParticalesBackground from './components/ParticalesBackground';
import React from 'react';

const queryClient = new QueryClient

function App() {
  return (
    <div>
      <ParticalesBackground />
      <QueryClientProvider client={queryClient}>

        <Routes>
          <Route path='/' element={<Root />} ></Route>
       
        </Routes>
      </QueryClientProvider>
    </div>
  )
}

function Root() {
  return <>
    <div className='body'>
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

