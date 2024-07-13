function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <img src="./logo.png" alt="Logo" className="h-8 w-8" />
      <span className="text-2xl font-extrabold tracking-tight text-gray-900">
        Video <span className="text-indigo-600">AI</span>
      </span>
    </div>
  );
}

export default Logo;
