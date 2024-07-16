import { Logo } from 'src/components';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main className='container mx-auto px-10'>
      <Logo />
      <Outlet />
    </main>
  )
}

export default Layout;
