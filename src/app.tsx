import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

// all
import HomePage from './pages/home-page';
import ShopPage from './pages/shop-page/index';
import WomanPage from './pages/woman-page';
import ManPage from './pages/man-page';
import CartPage from './pages/cart-page';
import SmartPage from './pages/smart-page';
// visitor
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page/index';
// auth
import ProfilePage from './pages/profile-page';

import VisitorLayout from './layouts/visitor-layout';
import RequireAuth from './routing/require-auth';
import RequireVisitor from './routing/require-visitor';

import store from './store';

const App: React.FC = () => (
  <ReduxProvider store={store}>
    <Routes>
      <Route path="/" element={<VisitorLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/woman" element={<WomanPage />} />
        <Route path="/man" element={<ManPage />} />
        <Route path="/smart" element={<SmartPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route
          path="auth/login"
          element={(
            <RequireVisitor>
              <LoginPage />
            </RequireVisitor>
          )}
        />
        <Route
          path="auth/register"
          element={(
            <RequireVisitor>
              <RegisterPage />
            </RequireVisitor>
          )}
        />
        <Route
          path="profile"
          element={(
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          )}
        />
      </Route>
    </Routes>
  </ReduxProvider>
);

export default App;
