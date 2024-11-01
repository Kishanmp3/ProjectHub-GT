import "boxicons";

const Footer = ({ placeholder }) => {
  return (
    <footer className="w-full bg-surface-100 text-xs px-16">
      <div className="border-t w-full flex items-center justify-center py-2 gap-x-2">
        Copyright © 2024 by GT Web Dev Club
        <button className="text-sm">
          <i className="bx bxl-github"></i>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
