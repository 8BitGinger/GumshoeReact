import './App.css';
import Footer from './components/footer';
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

          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
