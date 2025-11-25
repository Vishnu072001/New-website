import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState(1);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      alert("Enter a valid email");
      return;
    }
    alert("OTP sent to " + email);
    setStep(2);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp === "123456") {
      alert("OTP verified!");
      setStep(3);
    } else {
      alert("Incorrect OTP. Try again! (Hint: 123456)");
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Password reset successful");
    setEmail("");
    setOtp("");
    setPassword("");
    setConfirmPassword("");
    setStep(1);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#283f6d8f] p-5">
      <div className="bg-white w-full max-w-sm p-8 rounded-xl shadow-xl text-center animate-fadeIn">

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <h2 className="text-2xl font-semibold text-gray-900 mb-1">Forgot Password?</h2>
            <p className="text-sm text-gray-500">We'll send an OTP to your email.</p>

            <form onSubmit={handleEmailSubmit} className="text-left mt-6">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button className="w-full mt-4 bg-orange-600 hover:bg-orange-500 text-white p-3 rounded-lg font-semibold">
                Send OTP
              </button>
            </form>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <h2 className="text-2xl font-semibold text-gray-900 mb-1">Enter OTP</h2>
            <p className="text-sm text-gray-500">
              OTP sent to <strong>{email}</strong>
            </p>

            <form onSubmit={handleOtpSubmit} className="text-left mt-6">
              <label className="text-sm font-medium text-gray-700">OTP</label>
              <input
                type="text"
                maxLength="6"
                className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />

              <button className="w-full mt-4 bg-orange-600 hover:bg-orange-500 text-white p-3 rounded-lg font-semibold">
                Verify OTP
              </button>
            </form>

            <button
              onClick={() => alert("OTP resent!")}
              className="mt-4 text-blue-600 underline text-sm cursor-pointer"
            >
              Resend OTP
            </button>
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
            <h2 className="text-2xl font-semibold text-gray-900 mb-1">Reset Password</h2>

            <form onSubmit={handlePasswordSubmit} className="text-left mt-6">
              <label className="text-sm font-medium text-gray-700">New Password</label>
              <input
                type="password"
                className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <label className="text-sm font-medium text-gray-700 mt-3 block">Confirm Password</label>
              <input
                type="password"
                className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />

              <button className="w-full mt-4 bg-orange-600 hover:bg-orange-500 text-white p-3 rounded-lg font-semibold">
                Save Password
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
