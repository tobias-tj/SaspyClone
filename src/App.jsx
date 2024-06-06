import './app.scss'
import { ThemeProvider } from './components/ThemeProvider'
import Entregas from './components/entregas/Entregas'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Parallax from './components/parallax/Parallax'
import Services from './components/services/Services'
import Tarifas from './components/tarifas/Tarifas'


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <section id="Somos Saspy">
      <Navbar />
      <Hero />
      </section>
      <section id="Servicios">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Entregas">
        <Parallax type="entregas"/>
      </section>
      <section className="bg-white dark:bg-blue">
        <Entregas/>
      </section>
      <section className="bg-white dark:bg-blue" id="Tarifas">
        <Tarifas />
      </section>
      <section>
        <Footer />
      </section>
    </ThemeProvider>
  )
}

export default App
