import logo from '/logo.png';
const Logo = ({ className = "h-10 w-auto" }: { className?: string }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <img src={logo} alt="Logo" className="h-10 w-auto" />
    </div>
  );
};

export default Logo;