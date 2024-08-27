export default function Modal({ open, children }) {
  return (
    // backdrop
    <div
      className={`
        fixed inset-0 flex justify-center items-center transition-colors
        ${open ? "visible z-10 bg-black/50" : "invisible"}
      `}
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
           p-10 transition-all
          ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}
      >
        {children}
      </div>
    </div>
  );
}
