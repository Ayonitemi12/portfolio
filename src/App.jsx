import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import NotFound from './pages/NotFound';
import { ThemeProvider } from './context/ThemeContext';
import FloatingThemeToggle from './components/FloatingThemeToggle';
import Certificates from './sections/Certificates';
import Skills from './sections/Skills';
import BackToTop from "./components/BackToTop";
import Blog from "./pages/Blog";
import BlogPost from './pages/BlogPost';


function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
    <div className="min-h-screen overflow-x-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main>
        <Routes>
            <Route 
              path="/" 
              element={
                <>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates/>
        <Experience />
        <Testimonial />
        <Contact />
         </>
              }
            />
             {/* Blog Routes */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
               {/* 404 Page */}
              <Route path="*" element={<NotFound />} />
            </Routes>
      </main>
        <Footer />
       <FloatingThemeToggle />
       <BackToTop />
    </div>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
