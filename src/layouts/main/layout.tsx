// components
import Navbar from 'src/layouts/main/Navbar';
import Footer from 'src/layouts/main/Footer';
import { Container } from '@mui/material';

type Props = {
  children: React.ReactNode;
};

function Main({ children }: Props) {
  return <Container maxWidth="xl">{children}</Container>;
}

export default Main;
