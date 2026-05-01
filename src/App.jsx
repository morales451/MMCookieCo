import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Menu from './components/Menu.jsx';
import CookieCakeGuide from './components/CookieCakeGuide.jsx';
import Testimonials from './components/Testimonials.jsx';
import CTABanner from './components/CTABanner.jsx';
import OurStory from './components/OurStory.jsx';
import Instagram from './components/Instagram.jsx';
import FAQ from './components/FAQ.jsx';
import OrderForm from './components/OrderForm.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <CTABanner
          eyebrow="Now Taking Orders"
          title="Reserve your batch for the week."
          subtitle="Each week we bake a small number of cookie cakes and dozens. Once they're spoken for, that's it until next week."
          ctaLabel="View the Menu"
          ctaHref="#menu"
          variant="tan"
        />
        <Menu />
        <CookieCakeGuide />
        <Testimonials />
        <CTABanner
          eyebrow="Limited Availability Each Week"
          title="A small kitchen. A short list."
          subtitle="We keep it intentionally small so every cookie leaves the kitchen at its best. Send a request and we'll confirm your spot."
          ctaLabel="Request an Order"
          ctaHref="#order"
          variant="mauve"
        />
        <OurStory />
        <Instagram />
        <FAQ />
        <OrderForm />
      </main>
      <Footer />
    </div>
  );
}
