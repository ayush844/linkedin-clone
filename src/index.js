import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home';
import MyNetworks from './Pages/MyNetworks';
import Jobs from './Pages/Jobs';
import Messages from './Pages/Messages';
import Notification from './Pages/Notification';
import MyConnections from './Pages/MyConnections';

const container = document.getElementById('root');
const root = createRoot(container);


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='networks' element={<MyNetworks />}/>
      <Route path='networks/myConnections' element={<MyConnections />}/>
      <Route path='jobs' element={<Jobs />}/>
      <Route path='messages' element={<Messages />}/>
      <Route path='notification' element={<Notification />}/>
    </Route>
  )
)


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
