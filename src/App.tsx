// App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { ThemeProvider } from './context/ThemeContext';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

const App = () => (
  <ThemeProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </ThemeProvider>
);

export default App;
