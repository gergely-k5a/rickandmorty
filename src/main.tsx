import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import App from './App.tsx';
import client from './apolloClient.ts';
import './index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </main>
  </StrictMode>
);
