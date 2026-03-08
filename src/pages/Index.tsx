import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SitterCard from "@/components/SitterCard";
import BottomNav from "@/components/BottomNav";
import { sitters } from "@/data/mockData";

const filters = ["All Sitters", "Top Rated", "Available Now"];

const Index = () => {
  const [city, setCity] = useState("");
  const [activeFilter, setActiveFilter] = useState("All Sitters");

  const filtered = sitters.filter((s) => {
    if (activeFilter === "Top Rated") return s.rating >= 4.7;
    if (activeFilter === "Available Now") return s.online;
    return true;
  });

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero */}
      <div className="bg-primary px-5 pt-12 pb-8">
        <h1 className="text-2xl font-bold text-primary-foreground leading-tight">
          Find your next<br />trusted babysitter.
        </h1>
        <p className="text-primary-foreground/70 text-sm mt-2">Trusted reviews from real parents</p>

        <div className="flex gap-2 mt-5">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Enter your city..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="pl-9 bg-card border-0 h-11 text-sm"
            />
          </div>
          <Button className="bg-secondary text-secondary-foreground h-11 px-5 font-semibold hover:bg-secondary/90">
            Go
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 px-5 mt-5 overflow-x-auto no-scrollbar">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
              activeFilter === f
                ? "bg-primary text-primary-foreground"
                : "bg-card text-muted-foreground border border-border"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Sitters */}
      <div className="px-5 mt-5">
        <h2 className="text-lg font-semibold text-foreground mb-3">Featured Sitters</h2>
        <div className="grid gap-3">
          {filtered.map((s) => (
            <SitterCard key={s.id} sitter={s} />
          ))}
        </div>
      </div>

      <BottomNav variant="home" />
    </div>
  );
};

export default Index;
