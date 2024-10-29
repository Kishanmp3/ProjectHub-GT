import { SignedIn, SignedOut, useAuth } from "@clerk/clerk-react";

const HomeNavbar = () => {
  const { signOut } = useAuth();
  const handleLogout = async () => {
    try {
      await signOut();
      console.log("User logged out");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  return (
    <nav className="w-full h-16 bg-surface-100 fixed">
      <div className="nav-margins flex justify-between items-center h-full">
        <div className="flex gap-x-14 items-center">
          <div className="font-semibold text-base">Project Hub @ GT</div>
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
            <a className="primary-btn" href="/loginlanding">
              Profile
            </a>
            <button
              onClick={handleLogout}
              className="secondary-btn"
              href="/logout"
            >
              Log Out
            </button>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;
