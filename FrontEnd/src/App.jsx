import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <div className="backer">
        <Navbar />

        <main className="page-container">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
