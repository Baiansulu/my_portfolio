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
        className="relative w-[92vw] max-w-5xl h-[88vh] bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-[60] rounded-md border bg-white/90 px-3 py-1 text-sm hover:bg-white"
          aria-label="Close résumé"
        >
          ✖
        </button>

        <iframe
          src="/_CV_.pdf#toolbar=0&navpanes=0&scrollbar=0&zoom=page-fit"
          title="Résumé PDF"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
