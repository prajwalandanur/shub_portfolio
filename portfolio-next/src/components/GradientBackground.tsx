export default function GradientBackground() {
  return (
    <>
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          background: 'linear-gradient(-45deg, rgba(255,255,255,0.4), rgba(37,99,235,0.03), rgba(212,175,55,0.04), rgba(255,255,255,0.4))',
          backgroundSize: '400% 400%',
          animation: 'gradient-shift 30s ease infinite',
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(37,99,235,0.02) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(212,175,55,0.03) 0%, transparent 50%)',
          backgroundSize: '400% 400%',
          animation: 'gradient-shift-secondary 40s ease infinite',
        }}
      />
    </>
  );
}
