import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {ReactQueryDevtools} from 'react-query/devtools'
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


const queryClient = new QueryClient

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <PortolioSection />
      <ReviewSection />
      <TeamSection />
      <ContactSection />
      <Footer />
      <ReactQueryDevtools initialIsOpen = {false} position = 'bottom-right' />
    </QueryClientProvider>
  );
}

export default App;

