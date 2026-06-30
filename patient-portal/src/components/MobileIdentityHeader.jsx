import FamilyProfileSwitcher from "./FamilyProfileSwitcher.jsx";

/** Slim brand identity strip — logo left, avatar right. Mobile only. */
function MobileIdentityHeader({ centerLabel = null }) {
  return (
    <header className="mobile-identity-header relative sticky top-0 z-40 flex items-center justify-between border-b border-gray-100 bg-white px-4 py-3 pt-safe shadow-sm lg:hidden">
      <div className="flex items-center gap-1">
        <img
          src="/ocs-medecins-mark.png"
          alt="OCS Santé Logo Mark"
          className="h-8 w-8 shrink-0 object-contain"
        />
        <div 
          className="w-[1px] rounded-full opacity-60 shrink-0" 
          style={{ height: 22, background: "linear-gradient(to bottom, #2bccc4, #f7ba24)" }} 
        />
        <div className="flex flex-col justify-center leading-none">
          <span className="text-slate-600 flex items-center tracking-tight" style={{ fontSize: 24, fontWeight: 400, marginTop: -2 }}>
            <span className="text-[#32b5b8] font-bold">OCS</span>
            <span className="text-[#64748b]">Santé</span>
          </span>
          <span className="text-slate-500 font-semibold uppercase" style={{ fontSize: 6, letterSpacing: "0.22em", marginTop: 2, marginLeft: 1 }}>
            Home Visit Doctors
          </span>
        </div>
      </div>

      {centerLabel ? (
        <p className="pointer-events-none absolute left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-wider text-brand-teal">
          {centerLabel}
        </p>
      ) : null}

      <FamilyProfileSwitcher variant="avatar" />
    </header>
  );
}

export default MobileIdentityHeader;
