import React from 'react';
import ReactDOM from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist';

import Player from './pages/Player';
import StoryTeller from './pages/StoryTeller';
import NeonCity from './pages/NeonCity';
import DiceRoller from './pages/DiceRoller';
import Contact from './pages/Contact';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,

        element: <Home />,
      },
      {
        path: '/player',
        element: <Player />,
      },
      {
        path: '/storyTeller',
        element: <StoryTeller />,
      },
      {
        path: '/neonCity',
        element: <NeonCity />,
      },
      {
        path: '/diceRoller',
        element: <DiceRoller />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
