"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import StarRating from "@/components/StarRating";
import BottomNav from "@/components/BottomNav";
import { reviewTags } from "@/data/mockData";
import { toast } from "sonner";

const categories = ["Reliability", "Communication", "Professionalism", "Child Engagement", "Safety"];

const ReviewNew = () => {
  const router = useRouter();
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showName, setShowName] = useState(true);
  const [reviewText, setReviewText] = useState("");

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  const handleSubmit = () => {
    toast.success("Review submitted! (mock)");
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 pt-12 pb-4 bg-primary">
        <button onClick={() => router.back()} className="text-primary-foreground">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-base font-semibold text-primary-foreground">Write a Review</h1>
      </div>

      <div className="px-5 mt-5 space-y-6">
        {/* Star Ratings */}
        <div>
          <h3 className="text-base font-semibold text-foreground mb-3">Rate this sitter</h3>
          <div className="bg-card rounded-xl p-4 shadow-sm border border-border space-y-4">
            {categories.map((cat) => (
              <div key={cat} className="flex items-center justify-between">
                <span className="text-sm text-foreground">{cat}</span>
                <StarRating
                  rating={ratings[cat] ?? 0}
                  size="md"
                  interactive
                  onRate={(r) => setRatings((prev) => ({ ...prev, [cat]: r }))}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div>
          <h3 className="text-base font-semibold text-foreground mb-3">Select tags</h3>
          <div className="flex flex-wrap gap-2">
            {reviewTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  selectedTags.includes(tag)
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground border border-border"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Name toggle */}
        <div className="flex items-center justify-between bg-card rounded-xl p-4 shadow-sm border border-border">
          <div>
            <p className="text-sm font-medium text-foreground">Show your name</p>
            <p className="text-xs text-muted-foreground">Your review will display your name publicly</p>
          </div>
          <Switch checked={showName} onCheckedChange={setShowName} />
        </div>

        {/* Text */}
        <div>
          <h3 className="text-base font-semibold text-foreground mb-2">Your review</h3>
          <Textarea
            placeholder="Share your experience..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className="min-h-[120px] bg-card"
          />
        </div>

        {/* Submit */}
        <Button
          onClick={handleSubmit}
          className="w-full h-12 bg-secondary text-secondary-foreground font-semibold text-base hover:bg-secondary/90"
        >
          Submit Review
        </Button>
      </div>

      <BottomNav variant="home" />
    </div>
  );
};

export default ReviewNew;
