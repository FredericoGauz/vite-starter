import React from 'react';
import ReactDOM from 'react-dom';
import 'virtual:windi.css';
import 'virtual:windi-devtools';
import './index.css';
import { Router } from './Router';

ReactDOM.render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>,
    document.getElementById('root'),
);
