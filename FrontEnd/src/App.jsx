import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/NavbarRedux';
import PlayMe from './components/PlayMe';
import Footer from './components/footer';

function App() {
  return (
    <div className="backer">
      <Navbar />
      <PlayMe />
      <main className="page-container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
