import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Menu from './components/Menu.jsx';
import OurStory from './components/OurStory.jsx';
import OrderForm from './components/OrderForm.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Menu />
        <OurStory />
        <OrderForm />
      </main>
      <Footer />
    </div>
  );
}
