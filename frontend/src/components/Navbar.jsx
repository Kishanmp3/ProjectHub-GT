import { SignedOut, SignedIn } from "@clerk/clerk-react";

const Navbar = ({}) => {
  return (
    <nav className="w-full h-16 bg-surface-100 fixed">
      <div className="nav-margins flex justify-between items-center h-full">
        <div className="flex gap-x-14 items-center">
          <a className="primary-btn" href="/loginlanding">
            Home
          </a>{" "}
          <div className="font-semibold text-base">Project Hub @ GT</div>
          <div className="flex items-center gap-x-8">
            {/* <button className="navlink">Navlink 1</button>
            <button className="navlink">Navlink 1</button>
            <button className="navlink">Navlink 1</button> */}
          </div>
        </div>

        <div className="flex gap-x-6 items-center">
          <SignedOut>
            <a className="secondary-btn" href="/signup">
              Sign Up
            </a>
            <a className="primary-btn" href="/login">
              Login
            </a>
          </SignedOut>

          <SignedOut>
            <a className="primary-btn" href="/profile">
              Profile
            </a>
            <a className="secondary-btn" href="/logout">
              Log Out
            </a>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
