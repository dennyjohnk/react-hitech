import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PostProvider } from './context/PostContext';
import { UserProvider } from './context/UserContext';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <PostProvider>
          <App />
        </PostProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
