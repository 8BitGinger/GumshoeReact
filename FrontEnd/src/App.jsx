import './App.css';
import { Outlet } from 'react-router-dom';
// import ScrollToTop from './component/ScrollToTop';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <div className="backer">
        <Navbar />
        <main className="page-container">
          {/* <Header /> */}
          {/* <ScrollToTop /> */}
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
