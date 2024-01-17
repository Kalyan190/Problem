// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        {/* Add other routes as needed */}
        
        <Route path="/second-page" element={<SecondPage/>}/>
        
      </Routes> 
    </Router>
  );
};

export default App;
