// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Homepage from './page/homepage/Homepage';
import SignIn from './page/sign&login/Signin';
import SupplierHomepage from './page/homepage/SupplierHomepage';
import CustomerHomaepage from './page/homepage/CustomerHomepage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/supplierhome' element={<SupplierHomepage />} />
          <Route path='/customerhome' element={<CustomerHomaepage />} />
          <Route path='/signin' element={<SignIn />} />

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
