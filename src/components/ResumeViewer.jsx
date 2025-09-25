// src/components/ResumeViewer.jsx
export default function ResumeViewer({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {/* container prevents background click from closing */}
      <div
        className="relative w-[96vw] max-w-6xl h-[88vh] bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* simple close button overlay */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-[60] rounded-md border bg-white/90 px-3 py-1 text-sm hover:bg-white"
          aria-label="Close résumé"
        >
          ✖
        </button>

        {/* clean PDF (hide browser toolbar where supported) */}
        <iframe
          src="/_CV_.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
          title="Résumé PDF"
          className="w-full h-full"
          allow="fullscreen"
        />
      </div>
    </div>
  );
}
