export default function ResumeViewer({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-[90vw] max-w-4xl h-[90vh] bg-white shadow-2xl flex flex-col"
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
          src="/_CV_.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
          title="Résumé PDF"
          className="w-full h-full"
          style={{ zoom: "0.9" }} 
        />
      </div>
    </div>
  );
}
