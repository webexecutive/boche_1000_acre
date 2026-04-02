import clsx from "clsx";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  loadingText = "Loading...",
  fullWidth = false,
  disabled = false,
  className,
  ...props
}) {
  const variantClass = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    glass: "btn-glass",
  }[variant] ?? "btn-primary";

  const sizeClass = {
    sm: "btn-sm",
    md: "",
    lg: "btn-lg",
  }[size];

  return (
    <button
      type="button"
      aria-busy={loading}
      className={clsx(
        variantClass,
        sizeClass,
        fullWidth && "btn-full",
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className="spinner" />}
      {loading ? loadingText : children}
    </button>
  );
}