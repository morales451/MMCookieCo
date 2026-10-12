import Header from './components/Header.jsx';
import NachosHero from './components/NachosHero.jsx';
import EventPacks from './components/EventPacks.jsx';
import CakeBuilder from './components/CakeBuilder.jsx';
import Menu from './components/Menu.jsx';
import CookieCakeGuide from './components/CookieCakeGuide.jsx';
import Testimonials from './components/Testimonials.jsx';
import CookieClub from './components/CookieClub.jsx';
import OurStory from './components/OurStory.jsx';
import Instagram from './components/Instagram.jsx';
import PickupMap from './components/PickupMap.jsx';
import FAQ from './components/FAQ.jsx';
import OrderForm from './components/OrderForm.jsx';
import Footer from './components/Footer.jsx';
import RosetteBorder from './components/bake/RosetteBorder.jsx';
import { RosetteSprite } from './components/bake/bake.jsx';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <RosetteSprite />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-choc focus:px-5 focus:py-3 focus:text-vanilla">
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        <NachosHero />
        <RosetteBorder frosting="strawberry" />
        <EventPacks />
        <RosetteBorder frosting="strawberry" />
        <CakeBuilder />
        <RosetteBorder frosting="strawberry" />
        <Menu />
        <CookieCakeGuide />
        <RosetteBorder frosting="vanilla" />
        <Testimonials />
        <OurStory />
        <CookieClub />
        <Instagram />
        <PickupMap />
        <FAQ />
        <RosetteBorder frosting="vanilla" />
        <OrderForm />
      </main>
      <Footer />
    </div>
  );
}
