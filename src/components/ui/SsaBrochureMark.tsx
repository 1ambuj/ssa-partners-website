/**
 * Brochure-style mark (CSS): triangle + diagonal.
 * `tone="blue"` — blue triangle (default).
 * `tone="orange"` — orange triangle (`--main-color`), no background tile.
 */
const SsaBrochureMark = ({
  className = "",
  size = "md",
  tone = "blue",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
  tone?: "blue" | "orange";
}) => {
  const sizeClass = size === "md" ? "" : size === "sm" ? "ssa-brochure-mark--sm" : "ssa-brochure-mark--lg";
  const toneClass = tone === "orange" ? "ssa-brochure-mark--tone-orange" : "";
  return (
    <span
      className={["ssa-brochure-mark", sizeClass, toneClass, className].filter(Boolean).join(" ")}
      aria-hidden={true}
    >
      <span className="ssa-brochure-mark__slash" />
    </span>
  );
};

export default SsaBrochureMark;
