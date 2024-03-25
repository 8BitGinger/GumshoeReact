import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar';
import PlayMe from './components/PlayMe';

function App() {
  return (
    <div className="backer">
      <Navbar />
      <PlayMe />
      <main className="page-container">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
