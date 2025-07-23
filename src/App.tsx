import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cheatsheets from './pages/Cheatsheets';
import Keybinds from './pages/Keybinds';
import CheatsheetDetail from './pages/CheatsheetDetail';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cheatsheets" element={<Cheatsheets />} />
            <Route path="/keybinds" element={<Keybinds />} />
            <Route path="/cheatsheets/:slug" element={<CheatsheetDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
