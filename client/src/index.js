import React from "react";
import ReactDOM from "react-dom";

import App from './App';
import { ContextProvider } from "./SocketContext";
import './styles.css';

ReactDOM.render(
    <ContextProvider>
        <App />    
    </ContextProvider>, 
    document.getElementById('root')
);

// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(document.getElementById('root'));
// root.render(<App tab="home" />);
