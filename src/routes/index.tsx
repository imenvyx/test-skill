import { Navigate, useRoutes } from 'react-router-dom';
import Main from 'src/layouts/main/layout';
import Home from 'src/sections/home/view/home';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: (
        <Main>
          <Home />
        </Main>
      ),
    },
    { path: '*', element: <Navigate to="/" replace /> },
  ]);
}
