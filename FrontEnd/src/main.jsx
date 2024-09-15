import React from 'react';
import ReactDOM from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist';
import { Provider } from 'react-redux';
import store from './store.js';

import Player from './pages/Player.jsx';
import StoryTeller from './pages/StoryTeller.jsx';
import NeonCity from './pages/NeonCity.jsx';
import DiceRoller from './pages/DiceRoller.jsx';
import Contact from './pages/Contact.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Signup from './pages/Signup.jsx';

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
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
