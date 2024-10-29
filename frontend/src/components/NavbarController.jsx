import HomeNavbar from "./HomeNavbar";
import Navbar from "./Navbar";

function SetNavbar() {
  const componentMap = {
    "/": HomeNavbar,
    "/login": HomeNavbar,
    "/signup": HomeNavbar,
  };

  const Component = componentMap[window.location.pathname];
  return Component ? <Component /> : <div>Component not found</div>;
}

export default SetNavbar;