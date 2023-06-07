import React from 'react';
import { createRoot } from 'react-dom/client';

import './app.css'

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<h1 className="red-thing">Hello</h1>);
