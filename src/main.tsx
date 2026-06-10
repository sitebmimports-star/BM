import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#000',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>BM Imports</h1>
      <p>Site em desenvolvimento</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
