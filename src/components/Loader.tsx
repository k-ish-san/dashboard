const Loader = () => (
  <div className="flex items-center justify-center h-screen bg-[#FEFFF4]">
    <div className="relative">
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full border-4 border-[#EFF5E1] animate-ping" />
      
      {/* Inner spinning ring */}
      <div className="w-16 h-16 border-4 border-t-[#2D3B36] border-b-transparent border-l-[#2D3B36] border-r-transparent rounded-full animate-spin" />
    </div>
  </div>
);


export default Loader;
