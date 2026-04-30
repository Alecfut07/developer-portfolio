export default function LoadingProject() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-5xl mx-auto animate-pulse space-y-4">
        <div className="h-8 w-56 bg-zinc-800 rounded" />
        <div className="h-64 bg-zinc-800 rounded" />
        <div className="h-4 w-full bg-zinc-800 rounded" />
        <div className="h-4 w-5/6 bg-zinc-800 rounded" />
      </div>
    </main>
  );
}
