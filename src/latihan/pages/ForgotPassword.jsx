import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <main className="min-h-screen bg-special-mainBg flex justify-center items-center">
      {/* container start */}
      <div className="w-full max-w-sm">
        {/* logo start */}
        <div className="flex justify-center font-poppins tracking-wide text-primary text-4xl">
          <span className="font-bold">FINE</span>
          bank
          <span className="font-bold">.IO</span>
        </div>
        {/* logo end */}
        {/* Header start */}
        <div className="mt-6 text-center">
          <h2 className="text-xl font-bold text-defaultBlack">
            Forgot Password?
          </h2>
          <p className="text-sm text-gray-01 mt-2 px-11">
            Enter your email address to get the password reset link.
          </p>
        </div>
        {/* Header end */}
        {/* form start */}
        <div className="mt-7">
          <form action="">
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm mb-2">
                Email address
              </label>
              <input
                type="email"
                className="py-3 pl-4 text-sm rounded-md w-full bg-special-mainBg border border-gray-03 text-gray-01 focus:border-black focus:outline-none focus:ring-0"
                placeholder="hello@example.com"
                name="email"
                id="email"
              />
            </div>
            <button
              className="h-12 rounded-md text-sm bg-primary w-full text-white"
              type="submit"
            >
              Password Reset
            </button>
          </form>
        </div>
        {/* link start */}
        <div className="flex justify-center items-center gap-1 text-gray-02 text-sm mt-5">
          <Link to="/" className="text-gray-02 text-sm font-bold">
            Back to login
          </Link>
        </div>
        {/* link end */}
      </div>
      {/* container end */}
    </main>
  );
}

export default ForgotPassword;
