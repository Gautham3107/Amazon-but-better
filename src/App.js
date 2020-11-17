import { useEffect } from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Checkout from './components/Checkout';
import Header from './components/Header'
import Home from './components/Home';
import Login from './components/Login';
import Payment from './components/Payment';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './components/Orders';

const promise = loadStripe("pk_test_51HoN5ULugQClFKIAjh9YQbpXMH4Owdx9LL85qnwcMfFPTPL94a8lgmPIVCHEtHeM4h4KRD7zQ4alpKoJM6mFekKF003EK6dmZ2")

function App() {
  const[{user},dispatch] = useStateValue();
  
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);




  return (
    
      <Router>
        <div className="app">
          <Switch>
            <Route path="/orders">
              <Header />
              <Orders />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/payment">
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>              
            </Route>
            <Route path="/">
              <Header />
              <Home />
            </Route>
            
            
            
          </Switch>
        </div>
      </Router>
      
  );
}

export default App;
