import './App.css'
import Banner from './components/Banner/Banner'
import Explore from './components/Explore/Explore'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import Stats from './components/Stats/Stats'

function App() {


  return (
    <>
      <header>
        <NavBar></NavBar>
        <Banner></Banner>
      </header>
      <main>
        <Stats></Stats>
      </main>
      <footer>
        <Explore></Explore>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default App
