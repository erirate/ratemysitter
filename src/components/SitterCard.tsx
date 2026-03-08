"use client";

import { useRouter } from "next/navigation";
import { BadgeCheck } from "lucide-react";
import StarRating from "./StarRating";
import type { Sitter } from "@/data/mockData";

const SitterCard = ({ sitter }: { sitter: Sitter }) => {
  const router = useRouter();
  const initials = sitter.name.split(" ").map((n) => n[0]).join("");

  return (
    <button
      onClick={() => router.push(`/sitter/${sitter.id}`)}
      className="bg-card rounded-lg p-4 shadow-sm border border-border text-left w-full hover:shadow-md transition-shadow"
    >
      <div className="flex items-start gap-3">
        <div className="relative flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
            {initials}
          </div>
          {sitter.online && (
            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-green border-2 border-card" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <h3 className="font-semibold text-foreground text-sm truncate">{sitter.name}</h3>
            {sitter.verified && <BadgeCheck className="w-4 h-4 text-green flex-shrink-0" />}
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <StarRating rating={sitter.rating} size="sm" />
            <span className="text-xs text-muted-foreground">({sitter.reviewCount})</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2">{sitter.bio}</p>
        </div>
      </div>
    </button>
  );
};

export default SitterCard;
