import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux";

import { UsersHeader, Navbar } from "src/components";

const UserLayout = () => {
  const { userInfo } = useSelector(
    (state) => state.user
  );

  return (
    <>
      <div>
        <UsersHeader username={ userInfo.username } />
        <main className="container mx-auto px-10 pt-16">
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default UserLayout;
