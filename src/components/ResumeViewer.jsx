export default function ResumeViewer({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative bg-white shadow-2xl"
        style={{
          width: "min(90vw, 700px)",    
          aspectRatio: "8.5 / 11"      
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-[80] rounded-md border bg-white/90 px-3 py-1 text-sm hover:bg-white"
          aria-label="Close résumé"
        >
          ✖
        </button>

        <img
          src="/resume.png"
          alt="Résumé"
          className="w-full h-full object-fill"
        />

        <div className="absolute bottom-2 right-3 text-xs text-slate-600">
          <a
            className="underline"
            href="/_CV_.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Open PDF in new tab
          </a>
        </div>
      </div>
    </div>
  );
}
