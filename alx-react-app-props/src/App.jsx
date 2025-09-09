import React from 'react';
import UserContext from './UserContext';
import ProfilePage from "./components/ProfilePage";
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  
  return (
    <UserContext.Provider value={userData}>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <ProfilePage /> {/* 👈 no need to pass userData prop anymore */}
    </UserContext.Provider>
  );
}

export default App;
