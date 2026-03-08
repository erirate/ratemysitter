import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Share2, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import StarRating from "@/components/StarRating";
import RatingBar from "@/components/RatingBar";
import BottomNav from "@/components/BottomNav";
import { sitters, reviews } from "@/data/mockData";

const SitterProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const sitter = sitters.find((s) => s.id === id) ?? sitters[0];
  const sitterReviews = reviews.filter((r) => r.sitterId === sitter.id);
  const initials = sitter.name.split(" ").map((n) => n[0]).join("");

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-12 pb-4 bg-primary">
        <button onClick={() => navigate(-1)} className="text-primary-foreground">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-base font-semibold text-primary-foreground">Sitter Profile</h1>
        <button className="text-primary-foreground">
          <Share2 className="w-5 h-5" />
        </button>
      </div>

      {/* Profile Card */}
      <div className="bg-card mx-5 -mt-0 rounded-xl p-5 shadow-sm border border-border mt-4">
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
              {initials}
            </div>
            {sitter.online && (
              <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green border-2 border-card" />
            )}
          </div>
          <div className="flex items-center gap-1.5 mt-3">
            <h2 className="text-lg font-bold text-foreground">{sitter.name}</h2>
            {sitter.verified && <BadgeCheck className="w-5 h-5 text-green" />}
          </div>
          <p className="text-sm text-muted-foreground">{sitter.title}</p>
          <p className="text-xs text-muted-foreground mt-0.5">{sitter.city}</p>
          <div className="flex items-center gap-2 mt-2">
            <StarRating rating={sitter.rating} size="md" />
            <span className="text-sm font-semibold text-foreground">{sitter.rating}</span>
            <span className="text-xs text-muted-foreground">({sitter.reviewCount} reviews)</span>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="mx-5 mt-5">
        <h3 className="text-base font-semibold text-foreground mb-3">Performance Metrics</h3>
        <div className="bg-card rounded-xl p-4 shadow-sm border border-border space-y-3">
          <RatingBar label="Reliability" value={sitter.metrics.reliability} />
          <RatingBar label="Communication" value={sitter.metrics.communication} />
          <RatingBar label="Professionalism" value={sitter.metrics.professionalism} />
          <RatingBar label="Child Engagement" value={sitter.metrics.childEngagement} />
          <RatingBar label="Safety" value={sitter.metrics.safety} />
        </div>
      </div>

      {/* Reviews */}
      <div className="mx-5 mt-5">
        <h3 className="text-base font-semibold text-foreground mb-3">Recent Reviews</h3>
        <div className="space-y-3">
          {sitterReviews.map((review) => (
            <div key={review.id} className="bg-card rounded-xl p-4 shadow-sm border border-border">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-xs flex-shrink-0">
                  {review.reviewerInitials}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm text-foreground">{review.reviewerName}</span>
                    <span className="text-xs text-muted-foreground">{review.date}</span>
                  </div>
                  <StarRating rating={review.rating} size="sm" />
                  <p className="text-sm text-muted-foreground mt-1.5">{review.text}</p>
                </div>
              </div>
            </div>
          ))}
          {sitterReviews.length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-6">No reviews yet.</p>
          )}
        </div>
      </div>

      {/* CTA */}
      <div className="px-5 mt-6">
        <Button
          onClick={() => navigate(`/claim/${sitter.id}`)}
          className="w-full h-12 bg-secondary text-secondary-foreground font-semibold text-base hover:bg-secondary/90"
        >
          Claim This Profile
        </Button>
      </div>

      <BottomNav variant="profile" />
    </div>
  );
};

export default SitterProfile;
