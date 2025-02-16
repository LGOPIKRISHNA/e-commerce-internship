import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import ProductList from './components/ProductList.jsx';
import Footer from './components/Footer.jsx';
import TodayDeals from './components/TodayDeals.jsx';
import Upperbar from './components/Upperbar.jsx';
import Signin from './components/Signin.jsx';
import Signup from './components/Signup.jsx';
import UsersPage from './components/Userspage/UsersPage.jsx';
import DealsSlider from "./components/DealsSlider";
import './styles/App.css';
import Department from './components/Department.jsx';

// A wrapper component to conditionally render layout components
const AppContent = () => {
  const location = useLocation();

  // Exclude layout components for the /userspage route
  if (location.pathname === "/userspage") {
    return <UsersPage />;
  }

  return (
    <div className="app">
      <Upperbar />
      <Navbar />
      <Department/>
      <main className="main-content container">
        <Routes>
          <Route path="/" element={
            <>
              {/* <section className="hero-section">
                <div className="hero-container">
                  <img 
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1920"
                    alt="Hero section"
                    className="hero-image"
                  />
                  <div className="hero-overlay">
                    <div className="hero-content">
                      <h1 className="hero-title">Summer Collection</h1>
                      <p className="hero-subtitle">Discover our latest arrivals</p>
                      <button className="hero-button">Shop Now</button>
                    </div>
                  </div>
                </div>
              </section> */}
              <div>
                <DealsSlider />
              </div>
              <ProductList />
              <TodayDeals />
            </>
          } />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/userspage" element={<UsersPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;