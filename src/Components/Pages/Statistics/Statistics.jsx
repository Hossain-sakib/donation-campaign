import { useLoaderData } from "react-router-dom";
import PieChartComponent from './PieChartComponent';


const Statistics = () => {

    const data = useLoaderData();
    let amount = 0;
    data.map(element => {
        amount += element.amount;
    })
    const totalDonation = amount;
    const donatedMoney = JSON.parse(localStorage.getItem('donated'));
    let storageAmount = 0;
    donatedMoney.map(element => {
        storageAmount += element.amount;
    })
    let storageDonation = storageAmount;
    const donations = [totalDonation, storageDonation];

    return (
        <div>
            <PieChartComponent donations={donations}></PieChartComponent>
        </div>
    );
};

export default Statistics;