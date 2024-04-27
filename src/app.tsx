import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Router from './routes';
import ThemeProvider from './theme';

export default function App() {
  // Create a client
  const queryClient = new QueryClient();
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Router />;
      </QueryClientProvider>
    </ThemeProvider>
  );
}
