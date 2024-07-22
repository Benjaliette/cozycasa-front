import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux";

import { TasksHeader, Navbar } from "src/components";

const TodoLayout = () => {
  const { userInfo } = useSelector(
    (state) => state.user
  );

  return (
    <>
      <main className="container mx-auto px-10">
        <TasksHeader username={ userInfo.username } />
        <Outlet />
      </main>
      <Navbar userId={userInfo._id} />
    </>
  )
}

export default TodoLayout
