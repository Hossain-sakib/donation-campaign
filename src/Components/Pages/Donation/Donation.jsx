import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


const Donation = () => {

    const [donations,setDonations] = useState([]);
    const [noFound,setNoFound] = useState(false);


    useEffect(()=>{
        const donatedMoney = JSON.parse(localStorage.getItem('donated'));
        if(donatedMoney){
            setDonations(donatedMoney);
        }
        else{
            setNoFound("No Donation History Found!");
        }
    },[])
    return (
        <div className="flex justify-center">
            {
                noFound ? <p className="text-center h-[80vh] flex justify-center items-center text-3xl font-bold text-red-500">{noFound}</p> : 

                <div className="pt-14">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {
                        donations?.map(card=> <DonationCard key={card.id} card={card}></DonationCard>)
                    }
                </div>
                </div>
            }
        </div>
    );
};

export default Donation;