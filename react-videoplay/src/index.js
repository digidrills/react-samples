import React from 'react'
import { render } from 'react-dom';
import App from './App'
import {videos} from './videos'
import { createRoot } from 'react-dom/client';


const container = document.getElementById('root');
const root = createRoot(container);


root.render(<App videos={videos}/>);
