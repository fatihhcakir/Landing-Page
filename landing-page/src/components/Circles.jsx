function Circles() {
  return (
    <div className="relative">
      <div className="absolute md:w-[400px] md:h-[400px] top-[200px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[1px] border-white bg-transparent rounded-full shadow-custom opacity-50 -z-10 w-[300px] h-[300px]"></div>
      <div className="absolute md:w-[600px] md:h-[600px] top-[200px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[1px] border-white bg-transparent rounded-full shadow-custom opacity-50 -z-10 w-[400px] h-[400px]"></div>
    </div>
  );
}

export default Circles;
