import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// import react-redux toolkit store
import { Provider } from 'react-redux';
import store from './store/store.js';

// import pages
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Resume from './pages/Resume.jsx';
import Profile from './pages/Profile.jsx';

// import components
import App from './components/App.jsx';

//import css
import './css/main.min.css';

// react router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route route='/' element={<App />}>
      <Route index={true} path='/' element={<Home />} />
      <Route path='/resume' element={<Resume />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/profile' element={<Profile />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
