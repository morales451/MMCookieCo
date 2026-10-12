import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Menu from './components/Menu.jsx';
import CookieCakeGuide from './components/CookieCakeGuide.jsx';
import Testimonials from './components/Testimonials.jsx';
import Wholesale from './components/Wholesale.jsx';
import CookieClub from './components/CookieClub.jsx';
import OurStory from './components/OurStory.jsx';
import Instagram from './components/Instagram.jsx';
import PickupMap from './components/PickupMap.jsx';
import FAQ from './components/FAQ.jsx';
import Referral from './components/Referral.jsx';
import OrderForm from './components/OrderForm.jsx';
import Footer from './components/Footer.jsx';
import StickyOrderCTA from './components/StickyOrderCTA.jsx';
import ExitIntent from './components/ExitIntent.jsx';
import RosetteBorder from './components/bake/RosetteBorder.jsx';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-choc focus:px-5 focus:py-3 focus:text-vanilla">
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <RosetteBorder frosting="strawberry" />
        <Menu />
        <CookieCakeGuide />
        <RosetteBorder frosting="vanilla" />
        <Testimonials />
        <Wholesale />
        <CookieClub />
        <OurStory />
        <Instagram />
        <PickupMap />
        <FAQ />
        <Referral />
        <RosetteBorder frosting="vanilla" />
        <OrderForm />
      </main>
      <Footer />
      <StickyOrderCTA />
      <ExitIntent />
    </div>
  );
}
