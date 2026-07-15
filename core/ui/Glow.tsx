export default function Glow() {
  return (
    <>
      {/* Glow principale */}
      <div
        className="
          fixed
          left-1/2
          top-[-220px]
          -translate-x-1/2
          h-[700px]
          w-[700px]
          rounded-full
          bg-cyan-400/18
          blur-[180px]
          pointer-events-none
          -z-10
        "
      />

      {/* Glow sinistro */}
      <div
        className="
          fixed
          left-[-150px]
          top-[450px]
          h-[450px]
          w-[450px]
          rounded-full
          bg-cyan-500/10
          blur-[160px]
          pointer-events-none
          -z-10
        "
      />

      {/* Glow destro */}
      <div
        className="
          fixed
          right-[-150px]
          top-[700px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-400/8
          blur-[180px]
          pointer-events-none
          -z-10
        "
      />
    </>
  );
}