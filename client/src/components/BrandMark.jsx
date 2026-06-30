import { cx } from "../lib/utils.js";

function BrandMark({
  className,
  logoClassName,
  size = 60,
  maxWidth,
  withWordmark = true,
}) {
  const companyName = "OCS Santé";
  const frameWidth = withWordmark ? maxWidth ?? Math.round(size * 4.35) : size;

  if (withWordmark) {
    return (
      <span
        className={cx("inline-flex shrink-0 items-center gap-1.5", className)}
        style={{ height: size, width: frameWidth }}
      >
        <img
          alt="OCS Santé Logo Mark"
          className={cx("block object-contain", logoClassName)}
          style={{ height: size, width: size }}
          src="/ocs-medecins-mark.png"
        />
        {/* Vertical separator line */}
        <div 
          className="w-[1.5px] rounded-full opacity-60 shrink-0" 
          style={{ height: size * 0.7, background: "linear-gradient(to bottom, #2bccc4, #f7ba24)" }} 
        />
        <div className="flex flex-col justify-center leading-none">
          <span 
            className="text-slate-600 flex items-center tracking-tight" 
            style={{ fontSize: size * 0.75, fontWeight: 400, marginTop: size * -0.05 }}
          >
            <span className="text-[#32b5b8] font-bold">OCS</span>
            <span className="text-[#64748b]">Santé</span>
          </span>
          <span 
            className="text-slate-500 font-semibold uppercase" 
            style={{ fontSize: size * 0.18, letterSpacing: "0.22em", marginTop: size * 0.05, marginLeft: size * 0.02 }}
          >
            Home Visit Doctors
          </span>
        </div>
      </span>
    );
  }

  return (
    <span
      className={cx("inline-flex shrink-0 items-center", className)}
      style={{ height: size, width: frameWidth }}
    >
      <img
        alt={companyName}
        className={cx("block h-full w-full object-contain object-left", logoClassName)}
        src="/ocs-medecins-mark.png"
      />
    </span>
  );
}

export default BrandMark;
