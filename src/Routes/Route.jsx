import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Error from "../Components/Error/Error";
import Home from "../Components/Home/Home"
import Donation from "../Components/Pages/Donation/Donation";
import DonationDetails from "../Components/Pages/Details/DonationDetails";


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
      ]
    },
  ]);
  

export default router;