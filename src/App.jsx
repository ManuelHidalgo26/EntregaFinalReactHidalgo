import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
function App() {
  return (
    <>
    <Navbar/>
    
    <ItemListContainer greeting="Bienvenidos a nuestra tienda de Hamburguesas"/>

    <Footer/>
    </>
  )
}

export default App
