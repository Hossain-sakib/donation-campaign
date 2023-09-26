import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Details from "./Details";



const DonationDetails = () => {
    const [idDetail, setIdDetail] = useState();
    const  {id}  = useParams();
    const details = useLoaderData();

    useEffect(() => {
        const findDetail = details?.find(idDetail => idDetail.id == id);
        setIdDetail(findDetail);
    }, [id,details]);
   console.log(idDetail)
    return (
        <div className="container flex justify-center pt-10 px-8 h-screen">
            <Details idDetail={idDetail}></Details>
        </div>
    );
};

export default DonationDetails;  