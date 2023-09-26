import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Error from "../Components/Error/Error";
import Home from "../Components/Home/Home"
import Donation from "../Components/Pages/Donation/Donation";
import DonationDetails from "../Components/Pages/Details/DonationDetails";
import Statistics from "../Components/Pages/Statistics/Statistics";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<Error></Error>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch('/public/Donation.json')
        },
        {
          path:"/donation_details/:id",
          element:<DonationDetails></DonationDetails>,
          loader:()=>fetch('/public/Donation.json')
        },
        {
          path:"/donation",
          element:<Donation></Donation>,
        },
        {
          path:"/statistics",
          element:<Statistics></Statistics>,
          loader:()=>fetch('/public/Donation.json')
        }
      ]
    },
  ]);
  

export default router;