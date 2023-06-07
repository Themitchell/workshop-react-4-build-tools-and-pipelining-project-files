import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

throw new Error("Oh dear I have broken something");

root.render(<h1>Hello</h1>);
