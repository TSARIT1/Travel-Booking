import React from 'react';
import Navbar from './component/Navbar';
import ServiceTabs from './component/ServiceTabs';

import "./index.css"
function App() {
  return (
    <div>
      <Navbar />
       <div className="hero">
        <ServiceTabs />
        
      </div>
    </div>
  );
}

export default App;
