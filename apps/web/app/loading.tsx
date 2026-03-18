export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/30 border-t-white" />
      <p className="mt-4 text-sm text-white/60">Carregando...</p>
    </div>
  )
}
