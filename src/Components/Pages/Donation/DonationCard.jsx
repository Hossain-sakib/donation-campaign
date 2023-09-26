

const DonationCard = ({ card }) => {
    const { id, title,image, amount, text_color,category,category_color,bg_color } = card || {}
    return (
        <div>
            <div className="md:h-52 flex justify-between shadow-xl rounded-lg" style={{backgroundColor:bg_color}}>
                <img className="w-52 rounded-l-lg" src={image} />
                <div className="px-8 py-4 md:pr-36 space-y-3" >
                    <button className="px-2 py-1 text-xs font-medium border rounded-md" style={{ backgroundColor: category_color, color: text_color }}>{category}</button>
                    <h2 className="card-title">{title}</h2>
                    <p className="font-bold text-sm" style={{color:text_color}}>$ {amount}</p>
                    <div className="md:pt-6">
                        <button className=" text-white font-bold text-sm p-2  rounded-md" style={{ backgroundColor: text_color }}>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;