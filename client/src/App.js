import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Fib from './Fib';
import OtherPage from './OtherPage';
import NoMatch from './NoMatch';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <Link to='/' className='App-link'>
            Home
          </Link>
          <Link to='/other' className='App-link'>
            Other page
          </Link>
          <Routes>
            <Route path='/' element={<Fib />} />
            <Route path='/other' element={<OtherPage />} />
            <Route path='*' element={<NoMatch />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
