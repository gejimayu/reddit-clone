// Components
import Container from '../Container';
import Navbar from '../Navbar';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
