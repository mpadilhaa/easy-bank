import "./App.css";
import AdvantageContent from "./components/AdvantageContent";
import Footer from "./components/Footer";
import LatestArticles from "./components/LatestArticles";

import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <AdvantageContent />
      <LatestArticles />
      <Footer />
    </div>
  );
}

export default App;
