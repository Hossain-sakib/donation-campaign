

const Card = ({ card }) => {
    const { id, title, category, image, amount, description, bg_color, text_color, category_color } = card;
    return (
        <div>
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure><img className="w-full" src={image} /></figure>
                <div className="px-4 py-4" style={{backgroundColor:bg_color}}>
                    <button className="px-1 py-1 text-xs font-medium border" style={{backgroundColor:category_color,color:text_color}}>{category}</button>
                    <h2 className="text-lg font-bold" style={{color:text_color}}>{title}</h2>
                </div>
            </div>
        </div>
    );
};

export default Card;