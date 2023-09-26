import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


const Donation = () => {

    const [donations, setDonations] = useState([]);
    const [noFound, setNoFound] = useState(false);
    const [isShow, setIsShow] = useState(false);


    useEffect(() => {
        const donatedMoney = JSON.parse(localStorage.getItem('donated'));
        if (donatedMoney) {
            setDonations(donatedMoney);
        }
        else {
            setNoFound("No Donation History Found!");
        }
    }, [])
    return (
        <div >
            <div className="flex justify-center">
                {
                    noFound ? <p className="text-center h-[80vh] flex justify-center items-center text-3xl font-bold text-red-500">{noFound}</p> :

                        <div className="pt-14">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                {
                                    isShow ? donations?.map(card => <DonationCard key={card.id} card={card}></DonationCard>)
                                        : donations?.slice(0, 4).map(card => <DonationCard key={card.id} card={card}></DonationCard>)
                                }
                            </div>
                        </div>
                }
            </div>
            <div className="flex justify-center pt-8  mb-24">
                <div >
                    <button onClick={() => setIsShow(!isShow)}
                        className="px-6 py-2 font-semibold rounded-lg bg-lime-600 text-white text-base ">{isShow ? "Show less" : "Show All"}</button>
                </div>
            </div>
        </div>
    );
};

export default Donation;