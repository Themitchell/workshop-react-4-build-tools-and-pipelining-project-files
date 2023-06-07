import React from 'react';
import { createRoot } from 'react-dom/client';

import styles from './app.css'

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<h1 className={styles.redThing}>Hello from Australia</h1>);
