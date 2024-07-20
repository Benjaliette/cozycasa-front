import { Logo } from 'src/components';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <main className='container mx-auto px-10'>
      <Logo />
      <Outlet />
    </main>
  )
}

export default MainLayout;
