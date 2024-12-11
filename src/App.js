import Navbar from './component/NavBar/navbar';
import Intro from './component/NavBar/Intro/intro';
import Skills from './component/Skills/skills';
import Projects from './component/Projects/projects';
import Contact from './component/Contact/contact';
import Footer from './component/Footer/footer';
function App()
{
  return(
    <div className='App'>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;