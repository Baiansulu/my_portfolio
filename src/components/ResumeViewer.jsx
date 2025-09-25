export default function ResumeViewer({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-[92vw] max-w-5xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-[60] rounded-md border bg-white/90 px-3 py-1 text-sm hover:bg-white"
          aria-label="Close résumé"
        >
          ✖
        </button>

        <img
  src="/resume.png"
  alt="Résumé"
  className="w-full h-full object-cover"
/>


        <div className="flex items-center justify-between px-4 py-2 text-sm text-slate-600">
          <span>Preview</span>
          <a className="underline" href="/_CV_.pdf" target="_blank" rel="noreferrer">
            Open PDF in new tab
          </a>
        </div>
      </div>
    </div>
  );
}
