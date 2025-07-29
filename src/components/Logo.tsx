import { Zap } from 'lucide-react';

const Logo = ({ className = "h-10 w-auto" }: { className?: string }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="flex items-center justify-center w-10 h-10 rounded-lg gradient-primary">
        <Zap className="h-6 w-6 text-primary-foreground" />
      </div>
      <div className="flex flex-col">
        <div className="text-xl font-bold text-primary">SEDT</div>
        <div className="text-xs text-muted-foreground -mt-1">Drone Tech</div>
      </div>
    </div>
  );
};

export default Logo;