type RegisterPageProps = {
  onSwitchToLogin?: () => void;
};

export default function RegisterPage({ onSwitchToLogin }: RegisterPageProps) {
  return (
    <div
      className="relative flex items-center justify-center h-full px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1549194400-06e6874c2fd1?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="relative bg-slate-900/90 border border-slate-700 rounded-lg shadow-lg p-4 md:p-8 w-full max-w-sm md:max-w-md text-white">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">Register</h1>
        <p className="text-center text-slate-200 mb-6 text-sm md:text-base">
          Create an account to get started.
        </p>
        <form action="" className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              autoComplete="email"
              className="w-full border border-slate-700 bg-slate-950/60 text-white px-3 py-2 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-2">
              Username
            </label>
            <input
              type="text"
              id="name"
              autoComplete="name"
              className="w-full border border-slate-700 bg-slate-950/60 text-white px-3 py-2 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-200 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              autoComplete="new-password"
              className="w-full border border-slate-700 bg-slate-950/60 text-white px-3 py-2 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-200 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              autoComplete="new-password"
              className="w-full border border-slate-700 bg-slate-950/60 text-white px-3 py-2 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
          >
            Create account
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-slate-300">
          Already have an account?{' '}
          <button
            type="button"
            onClick={onSwitchToLogin}
            className="text-blue-400 hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}
