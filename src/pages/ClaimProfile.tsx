import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Progress } from "@/components/ui/progress";
import BottomNav from "@/components/BottomNav";
import { sitters } from "@/data/mockData";
import { toast } from "sonner";

const ClaimProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const sitter = sitters.find((s) => s.id === id) ?? sitters[0];

  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  const handleSendCode = () => {
    if (phone.length < 10) {
      toast.error("Please enter a valid phone number");
      return;
    }
    setStep(2);
    toast.success("Verification code sent! (mock)");
  };

  const handleVerify = () => {
    if (otp.length < 6) {
      toast.error("Please enter the full code");
      return;
    }
    toast.success("Profile claimed successfully! (mock)");
    navigate(`/sitter/${sitter.id}`);
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 pt-12 pb-4 bg-primary">
        <button onClick={() => navigate(-1)} className="text-primary-foreground">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-base font-semibold text-primary-foreground">Claim Profile</h1>
      </div>

      <div className="px-5 mt-5">
        {/* Step indicator */}
        <div className="mb-6">
          <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
            Step {step} of 3
          </p>
          <Progress value={(step / 3) * 100} className="mt-2 h-2" />
        </div>

        {step === 1 ? (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-foreground">Verify your phone number</h2>
              <p className="text-sm text-muted-foreground mt-1">
                To claim <span className="font-medium text-foreground">{sitter.name}</span>'s profile,
                we need to verify your identity with a phone number.
              </p>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number</label>
              <div className="flex gap-2">
                <div className="flex items-center justify-center px-3 bg-muted rounded-lg text-sm font-medium text-foreground border border-border">
                  +1
                </div>
                <Input
                  type="tel"
                  placeholder="(555) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-card h-11"
                />
              </div>
            </div>

            <Button
              onClick={handleSendCode}
              className="w-full h-12 bg-secondary text-secondary-foreground font-semibold text-base hover:bg-secondary/90"
            >
              Send Verification Code
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-foreground">Enter verification code</h2>
              <p className="text-sm text-muted-foreground mt-1">
                We sent a 6-digit code to +1 {phone}
              </p>
            </div>

            <div className="flex justify-center">
              <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>

            <Button
              onClick={handleVerify}
              className="w-full h-12 bg-secondary text-secondary-foreground font-semibold text-base hover:bg-secondary/90"
            >
              Verify & Claim Profile
            </Button>

            <button
              onClick={() => toast.info("Code resent! (mock)")}
              className="w-full text-center text-sm text-primary font-medium"
            >
              Resend Code
            </button>
          </div>
        )}

        {/* Security badge */}
        <div className="flex items-center gap-2 mt-8 p-3 bg-card rounded-xl border border-border">
          <ShieldCheck className="w-5 h-5 text-green flex-shrink-0" />
          <div>
            <p className="text-xs font-semibold text-foreground">SECURE VERIFICATION</p>
            <p className="text-[10px] text-muted-foreground">Your data is encrypted and never shared with third parties.</p>
          </div>
        </div>
      </div>

      <BottomNav variant="claim" />
    </div>
  );
};

export default ClaimProfile;
