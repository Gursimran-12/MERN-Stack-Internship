import '../App.css'
export const Card = ({ className, value, img, description }) => {
    return (
        <div className={className}>
            <img src={img} alt="Card visual" />
            <h1 id="heading"> {value} </h1>
            <p id="desc"> {description} </p>
            <button id= "btn"> Read More </button>

        </div>
    );
};
