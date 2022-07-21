import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div>
        <div>Header</div>
      <Outlet />
    </div>
  );
};
