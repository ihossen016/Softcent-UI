import CustomerSection from "./components/CustomerSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PortfolioSection from "./components/PortfolioSection";
import PricingSection from "./components/PricingSection";
import ProductSection from "./components/ProductSection";
import ReviewSection from "./components/ReviewSection";
import ServiceSection from "./components/ServiceSection";
import TechSection from "./components/TechSection";
import TopSection from "./components/TopSection";
import VideoSection from "./components/VideoSection";
import WorkflowSection from "./components/WorkflowSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TopSection />
      <VideoSection />
      <CustomerSection />
      <ServiceSection />
      <ProductSection />
      <PricingSection />
      <ReviewSection />
      <PortfolioSection />
      <TechSection />
      <WorkflowSection />
      <Footer />
    </div>
  );
}

export default App;
