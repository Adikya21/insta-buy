import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login'
import Signup from '../src/components/Signup';
import { Routes, Route, useNavigate } from 'react-router-dom';
import logoImg from './assets/logo.png';
import Home from './components/Home';
import { Badge, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState('');
  const [cartItems, setcartItems] = useState({});

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    if(userEmail){
        setUser(userEmail)
    }
}, []);

const handleAddToCart = (item) => {
  setcartItems({...cartItems, ...item});
}

  return (
    <div>
      <Navbar className='instaBuy-navbar'>
          <Navbar.Brand  onClick={()=> navigate('/home')} className="d-flex align-items-center" style={{fontSize:'2.5rem'}}>
            <img
              alt="Logo"
              src={logoImg}
              width="50"
              height="50"
              className="d-inline-block align-top" style={{paddingRight:10}}
            />{' '}
            InstaBuy
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            {user && <Button onClick={()=> navigate('/cart')}>Cart  &nbsp; {Object.keys(cartItems).length > 0 && <Badge bg='success'>{Object.keys(cartItems).length}</Badge>}</Button>}
            &nbsp;
            &nbsp;
            &nbsp;
          <Button variant="primary" type='submit' onClick={()=> navigate('/')}>{user ? 'Logout' : 'Login'}</Button>
          </Navbar.Collapse>
          

      </Navbar>
      <Routes>
        <Route path='/' element={<Login setUser={setUser} />} />
        <Route path='/signup' element={<Signup  setUser={setUser}/>} />
        <Route path='/home' element={<Home user={user}/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<ProductDetails handleAddToCart={handleAddToCart} cartItems={cartItems}/>}/>
        <Route path='/cart' element={<Cart cartItems={cartItems}/>}/>
        <Route path='/success' element={<Checkout/>}/>
      </Routes>
    </div>
  );
}

export default App;
