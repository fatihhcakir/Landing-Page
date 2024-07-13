function LoginButtons() {
  return (
    <div className="flex items-center space-x-4">
      <button className="bg-white transition border border-black text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-indigo-400">
        Login
      </button>
      <button className="bg-black transition text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-indigo-400">
        Signup
      </button>
    </div>
  );
}

export default LoginButtons;
