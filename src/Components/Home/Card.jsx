import { Link } from "react-router-dom";


const Card = ({ card }) => {
    const { id, title, category, image, bg_color, text_color, category_color } = card || {}
    return (
        <div>
            <Link to={`/donation_details/${id}`}>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure><img className="w-full" src={image} /></figure>
                    <div className="px-4 py-4" style={{ backgroundColor: bg_color }}>
                        <button className="px-2 py-1 text-xs font-medium border rounded-md" style={{ backgroundColor: category_color, color: text_color }}>{category}</button>
                        <h2 className="text-lg font-bold" style={{ color: text_color }}>{title}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;