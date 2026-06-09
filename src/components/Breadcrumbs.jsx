import { Link, useLocation } from "react-router-dom";
import { Breadcrumb } from "@chakra-ui/react";

function Breadcrumbs() {
  const location = useLocation();
  const crumbs = location.pathname
    .split("/")
    .filter(Boolean)
    .map((segment, index, arr) => ({
      label: segment.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()),
      path: "/" + arr.slice(0, index + 1).join("/"),
    }));

  if (crumbs.length === 0) return null;

  return (
    <nav className="flex items-center gap-1 text-sm text-gray-400">
      <Link to="/" className="hover:text-black transition-colors">Home</Link>
      {crumbs.map((crumb, i) => (
        <span key={crumb.path} className="flex items-center gap-1">
          <span>/</span>
          {i === crumbs.length - 1 ? (
            <span className="text-black font-medium">{crumb.label}</span>
          ) : (
            <Link to={crumb.path} className="hover:text-black transition-colors">
              {crumb.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}

export default Breadcrumbs;