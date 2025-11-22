import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();

  // Split path into parts
  const paths = location.pathname.split("/").filter(Boolean);

  return (
    <nav className="text-gray-600 dark:text-gray-300 mb-5 text-sm font-medium">
      <ul className="flex items-center gap-2">
        
        {/* Home Link */}
        <li>
          <Link to="/" className="text-indigo-600 dark:text-indigo-400 hover:underline">
            Home
          </Link>
        </li>

        {/* Breadcrumb path segments */}
        {paths.map((path, index) => {
          // Construct path dynamically (/state, /state/details etc.)
          const routePath = "/" + paths.slice(0, index + 1).join("/");

          return (
            <li key={index} className="flex items-center gap-2">
              <span>/</span>
              <Link
                to={routePath}
                className="capitalize hover:underline text-gray-700 dark:text-gray-200"
              >
                {path.replace("-", " ")}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
