import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

function Rating({ value }) {
  return (
    <div className="flex text-yellow-400 text-lg justify-center my-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star}>
          {value >= star ? (
            <FaStar />
          ) : value >= star - 0.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
      ))}
    </div>
  );
}

export default Rating;