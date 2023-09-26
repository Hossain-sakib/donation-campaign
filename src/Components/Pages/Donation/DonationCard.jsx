

const DonationCard = ({ card }) => {
    const { id, title, image, amount, text_color, category, category_color, bg_color } = card || {}
    return (
        <div>
            <div className="h-60 flex shadow-xl rounded-lg gap-8" style={{ backgroundColor: bg_color }}>
                <div className="block">
                    <img className="flex h-60 w-60 rounded-l-lg" src={image} />
                </div>
                <div className="block py-4 pr-6 md:pr-40 space-y-3" >
                    <button className="px-2 py-1 text-xs font-medium border rounded-md" style={{ backgroundColor: category_color, color: text_color }}>{category}</button>
                    <h2 className="card-title">{title}</h2>
                    <p className="font-bold text-base" style={{ color: text_color }}>$ {amount}</p>
                    <div className="md:pt-6">
                        <button className=" text-white font-bold text-sm p-2  rounded-md" style={{ backgroundColor: text_color }}>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;