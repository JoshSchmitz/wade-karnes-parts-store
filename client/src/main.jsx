import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// import css
import './css/main.min.css';

// import react-redux toolkit store
import { Provider } from 'react-redux';
import store from './store/store.js';

// import components
import App from './components/App.jsx';

// import pages
import HomePage from './components/pages/HomePage.jsx';
import ContactPage from './components/pages/ContactPage.jsx';
import ProductPage from './components/pages/ProductPage.jsx';
import ProfilePage from './components/pages/ProfilePage.jsx';
import NotFoundPage from './components/pages/404NotFound.jsx';

// react router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route route='/' element={<App />}>
      <Route index={true} path='/' element={<HomePage />} />
      <Route path='/product/:id' element={<ProductPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/profile' element={<ProfilePage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>
);
