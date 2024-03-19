import React from 'react';
import ReactDOM from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist';

import Player from './pages/Player';
import StoryTeller from './pages/StoryTeller';
import NeonCity from './pages/NeonCity';
import Contact from './pages/Contact';
import Landing from './pages/Landing';

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

        element: <Landing />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'player',
        element: <Player />,
      },
      {
        path: 'storyTeller',
        element: <StoryTeller />,
      },
      {
        path: 'neonCity',
        element: <NeonCity />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
