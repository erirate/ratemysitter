import { Home, Search, Plus, User, Star, Settings } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

type NavVariant = "home" | "profile" | "claim";

interface BottomNavProps {
  variant?: NavVariant;
}

const BottomNav = ({ variant = "home" }: BottomNavProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const homeItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Search, label: "Search", path: "/" },
    { icon: Plus, label: "", path: "/review/new", isCenter: true },
    { icon: User, label: "Profile", path: "/" },
  ];

  const profileItems = [
    { icon: Search, label: "Search", path: "/" },
    { icon: User, label: "Profile", path: "/" },
  ];

  const claimItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Star, label: "Reviews", path: "/" },
    { icon: User, label: "Profile", path: "/" },
    { icon: Settings, label: "Settings", path: "/" },
  ];

  const items = variant === "claim" ? claimItems : variant === "profile" ? profileItems : homeItems;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="max-w-lg mx-auto flex items-center justify-around py-2 px-4">
        {items.map((item, i) => (
          <button
            key={i}
            onClick={() => navigate(item.path)}
            className={
              item.isCenter
                ? "flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground -mt-5 shadow-lg"
                : `flex flex-col items-center gap-0.5 px-3 py-1 text-muted-foreground hover:text-foreground transition-colors ${location.pathname === item.path ? "text-primary" : ""}`
            }
          >
            <item.icon className={item.isCenter ? "w-6 h-6" : "w-5 h-5"} />
            {!item.isCenter && <span className="text-[10px] font-medium">{item.label}</span>}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
