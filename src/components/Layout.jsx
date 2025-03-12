import FloatingStars from "./FloatingStars";


const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <FloatingStars /> {/* Floating stars applied globally */}
      {children} {/* Render page content here */}
    </div>
  );
};

export default Layout;
