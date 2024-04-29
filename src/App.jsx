import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductList from './components/product/ProductList'
import { MyContext } from './components/CartContext/CartContext'
import { useState } from 'react'
import Header from './components/common/Navbar'

const App = () => {
  const [cart, setCart] = useState([])
  return (
    <Router>
      <MyContext.Provider value={{ cart, setCart }}>
      <Header/>
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/product' exact Component={ProductList} />
        </Routes>
      </MyContext.Provider>
    </Router>
  )
}

export default App
