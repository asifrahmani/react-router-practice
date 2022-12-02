import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";
import StyledNav from "../components/StyledNav";

const SharedLayout = () => {
  return (
    <>
      <StyledNav />
      <Outlet />
    </>
  );
};
export default SharedLayout;
