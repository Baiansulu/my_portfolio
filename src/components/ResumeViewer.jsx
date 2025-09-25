export default function ResumeViewer({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-5xl h-[80vh] bg-white rounded-xl shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-2 border-b">
          <h3 className="font-semibold">Résumé</h3>
          <button
            onClick={onClose}
            className="rounded-lg border px-3 py-1 text-sm hover:bg-slate-100"
            aria-label="Close résumé"
          >
            ✖
          </button>
        </div>

        <iframe
          src="/_CV_.pdf"
          title="Résumé PDF"
          className="w-full h-full"
        />

        <div className="px-4 py-2 border-t text-sm text-slate-600">
          If the PDF doesn’t appear, <a className="underline" href="/_CV_.pdf" target="_blank">open it in a new tab</a>.
        </div>
      </div>
    </div>
  );
}

