import { SignedOut, SignedIn, useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

const Navbar = ({}) => {
  const { signOut } = useAuth();
  const currentRoute = window.location.pathname;
  const handleLogout = async () => {
    try {
      await signOut();
      console.log("User logged out");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        currentRoute === "/"
          ? scrolled
            ? "bg-surface-100 fixed"
            : " fixed bg-transparent"
          : "bg-surface-100 fixed"
      } w-full h-[58px] z-40 duration-200 `}
    >
      <div className="nav-margins flex justify-between items-center h-full">
        <div className="flex gap-x-14 items-center">
          <a className="font-semibold text-base" href="/">
            Project Hub @ GT
          </a>
          <div className="flex items-center gap-x-8">
            {!(currentRoute === "/login" || currentRoute === "/signup") && (
              <>
                <button className="navlink">About</button>
              </>
            )}
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

          <SignedIn>
            <a className="primary-btn" href="/profile">
              Profile
            </a>
            <button className="secondary-btn" onClick={() => handleLogout()}>
              Log Out
            </button>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
