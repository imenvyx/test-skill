import ReactDOM from 'react-dom/client';

// app
import App from './app';

// styles
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Suspense>
      <App />
    </Suspense>
  </BrowserRouter>
);
