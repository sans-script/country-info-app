export function FallBack() {
  return (
    <div
      className="relative flex flex-col w-screen h-screen items-center justify-center bg-black bg-cover bg-center bg-[url('/fallback-globe.jpg')]"
      style={{
        backgroundImage: "url(/fallback-globe.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <h1 className="text-4xl text-white font-bold z-10">Loading...</h1>
    </div>
  );
}
