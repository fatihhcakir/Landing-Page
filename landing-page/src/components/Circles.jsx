function Circles() {
  return (
    <div className="relative">
      <div className="absolute w-[400px] h-[400px] top-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[1px] border-white bg-transparent rounded-full shadow-custom opacity-50 -z-10"></div>
      <div className="absolute w-[600px] h-[600px] top-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[1px] border-white bg-transparent rounded-full shadow-custom opacity-50 -z-10"></div>
    </div>
  );
}

export default Circles;
