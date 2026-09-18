const Glow = ({ className = "" }: { className?: string }) => (
  <div
    aria-hidden="true"
    className={`pointer-events-none absolute -z-10 rounded-full blur-3xl
      bg-[radial-gradient(circle,rgba(0,102,255,0.4)_0%,rgba(0,0,64,0)_70%)] ${className}`}
  />
);

export default Glow;
