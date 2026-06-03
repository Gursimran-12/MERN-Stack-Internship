import { Link } from "react-router-dom";
import {memo} from "react"
import Rating from "../ui/Rating";

function Card({ img, title, rating, link = "/prizeDesc", height = "h-[450px]" }) {
  return (
    <article className="text-center group cursor-pointer">
      <div className="overflow-hidden rounded-lg">
        <Link to={link}>
          <img
            src={img}
            alt={title}
            className={`w-full ${height} object-cover rounded-lg transition-transform duration-700 group-hover:scale-105`}
            loading="lazy"
          />
        </Link>
      </div>

      {rating !== undefined && <Rating value={rating} />}

      <h3 className="my-3 font-medium">{title}</h3>
    </article>
  );
}

export default memo(Card);