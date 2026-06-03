import { Link } from "react-router-dom";

export default function Breadcrumb({ paths = [] }) {
  return (
    <nav className="w-full flex justify-center mt-4">
      <ol className="flex items-center gap-2 text-lg text-gray-500">

        {paths.map((item, index) => (
          <li key={index} className="flex items-center gap-2">

          
            {item.to ? (
              <Link to={item.to} className="hover:text-black">
                {item.label}
              </Link>
            ) : (
              <span className="text-black font-medium">
                {item.label}
              </span>
            )}

           
            {index !== paths.length - 1 && <span>›</span>}

          </li>
        ))}

      </ol>
    </nav>
  );
}