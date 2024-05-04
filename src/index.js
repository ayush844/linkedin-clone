import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home';
import MyNetworks from './Pages/MyNetworks';
import Jobs from './Pages/Jobs';
import Messages from './Pages/Messages';
import Notification from './Pages/Notification';
import MyConnections from './Pages/MyConnections';
import MyJobs from './Pages/MyJobs';
import Profile from './Pages/Profile';
import Hero from './Pages/Hero';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

const container = document.getElementById('root');
const root = createRoot(container);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route element={<Layout />}>
        <Route path='home' element={<Home />} />
        <Route path='me' element={<Profile />} />
        <Route path='networks' element={<MyNetworks />} />
        <Route path='networks/myConnections' element={<MyConnections />} />
        <Route path='jobs' element={<Jobs />} />
        <Route path='jobs/myJobs' element={<MyJobs />} />
        <Route path='messages' element={<Messages />} />
        <Route path='notification' element={<Notification />} />
      </Route>
      <Route path='' element={<Hero />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
    </Route>
  )
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
