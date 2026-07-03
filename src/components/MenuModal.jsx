import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function MenuModal({ onClose }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageLoading, setPageLoading] = useState(true);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPage = (fn) => {
    setPageLoading(true);
    setPageNumber(fn);
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-2 sm:p-4" onClick={onClose}>
      <div className="relative bg-white rounded-xl w-full max-w-4xl flex flex-col overflow-hidden" style={{ maxHeight: "95dvh" }} onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 shrink-0">
          <span className="text-sm font-semibold text-gray-700 tracking-wide uppercase">Our Menu</span>
          <button onClick={onClose} className="bg-gray-100 text-black w-9 h-9 rounded-full flex items-center justify-center text-lg leading-none hover:bg-gray-200 transition">✕</button>
        </div>
        <div className="overflow-auto flex justify-center p-2 sm:p-4" style={{ maxHeight: "calc(95dvh - 110px)" }}>
          <div className="relative">
            {pageLoading && (
              <div className="absolute inset-0 bg-white flex items-center justify-center z-10 rounded">
                <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin" />
              </div>
            )}
            <Document file="/menu.pdf" onLoadSuccess={onDocumentLoadSuccess}>
              <Page
                key={pageNumber}
                pageNumber={pageNumber}
                width={Math.min(window.innerWidth - 32, 750)}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                onRenderSuccess={() => { setTimeout(() => setPageLoading(false), 150); }}
              />
            </Document>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 py-3 px-4 border-t border-gray-200 bg-white shrink-0">
          <button onClick={() => goToPage((prev) => Math.max(prev - 1, 1))} disabled={pageLoading || pageNumber === 1} className="px-4 py-2 text-sm bg-gray-200 rounded-lg disabled:opacity-40 hover:bg-gray-300 transition active:scale-95">← Prev</button>
          <span className="text-sm text-gray-600 min-w-15 text-center">{pageNumber} / {numPages ?? "..."}</span>
          <button onClick={() => goToPage((prev) => Math.min(prev + 1, numPages))} disabled={pageLoading || !numPages || pageNumber === numPages} className="px-4 py-2 text-sm bg-gray-200 rounded-lg disabled:opacity-40 hover:bg-gray-300 transition active:scale-95">Next →</button>
        </div>
      </div>
    </div>
  );
}

export default MenuModal;