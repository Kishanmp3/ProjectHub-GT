import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const Layout = ({ children }) => {
  return (
    <>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </ClerkProvider>
    </>
  );
};

export default Layout;
