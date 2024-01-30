import Home from "./pages/Home";


import Header from "./components/Header";
import Footer from "./components/Footer";

import './App.css';
import './css/style.css';
import './css/body/card.css';
import './css/body/figures.css';
import './css/body/mainImages.css';
import './css/body/slideshow.css';
import './css/header/header.css';
import './css/header/headerBackground.css';
import './css/footer/footer.css';
import './css/footer/socialMedia.css';



function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
