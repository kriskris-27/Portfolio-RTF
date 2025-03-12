import FloatingStars from "./FloatingStars";


const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-black text-white ">
      <FloatingStars /> 
      {children} 
    </div>
  );
};

export default Layout;
