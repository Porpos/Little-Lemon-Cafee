
import styles from './App.module.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home'
import Booking from './components/Booking';
function App() {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
        
        <Route path='/reservation' element={<Booking/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
