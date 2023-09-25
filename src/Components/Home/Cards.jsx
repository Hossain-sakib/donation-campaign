import Card from "./Card";


const Cards = ({ homeCards }) => {
    return (
        <div className="flex flex-col  items-center" >
            <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {
                    homeCards?.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;