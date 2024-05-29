import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <Router>
      <AppLayout>
        <Routes />
      </AppLayout>
    </Router>
  );
};

export default App;
