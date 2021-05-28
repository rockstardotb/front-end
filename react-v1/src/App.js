import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import HeroSection from './components/hero';
import DonationSection from './components/donations';
import TokenEconomics from './components/tokeneconomics';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <DonationSection/>
      <TokenEconomics/>
    </div>
  );
}

export default App;
