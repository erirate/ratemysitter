import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: "sm" | "md" | "lg";
  interactive?: boolean;
  onRate?: (rating: number) => void;
}

const sizeMap = { sm: "w-3.5 h-3.5", md: "w-5 h-5", lg: "w-7 h-7" };

const StarRating = ({ rating, maxStars = 5, size = "md", interactive = false, onRate }: StarRatingProps) => {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: maxStars }, (_, i) => {
        const filled = i < Math.floor(rating);
        const half = !filled && i < rating;
        return (
          <button
            key={i}
            type="button"
            disabled={!interactive}
            onClick={() => interactive && onRate?.(i + 1)}
            className={`${interactive ? "cursor-pointer hover:scale-110 transition-transform" : "cursor-default"} p-0 border-0 bg-transparent`}
          >
            <Star
              className={`${sizeMap[size]} ${
                filled ? "fill-star text-star" : half ? "fill-star/50 text-star" : "fill-muted text-muted-foreground/30"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
