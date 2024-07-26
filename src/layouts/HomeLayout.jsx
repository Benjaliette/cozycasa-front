import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { TasksHeader, Navbar } from "src/components";

const HomeLayout = () => {
  const { userInfo } = useSelector(
    (state) => state.user
  );

  const { id } = useParams();

  return (
    <>
      <main className="container mx-auto px-10">
        <TasksHeader username={ userInfo.username } />
        <Outlet />
      </main>
      <Navbar userId={userInfo._id} homeId={id} />
    </>
  )
}

export default HomeLayout
