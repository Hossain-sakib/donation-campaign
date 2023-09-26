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
        <div>
            <Details idDetail={idDetail}></Details>
        </div>
    );
};

export default DonationDetails;  