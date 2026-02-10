import { createBrowserRouter } from "react-router";
// import ProtectionProvider from "./ProtectionProvider";
import RootLayout from "../layout/RootLayout";
import Error from "../routes/Error";
import Home from "../routes/Home";
import Login from "../routes/Login";
import Contact from "../routes/Contact";
import Duas from "../routes/Duas";
import Profile from "../routes/Profile";
import Notifications from "../routes/Notifications";
import ProtectionProvider from "./ProtectionProvider";
import Terms from "../routes/Terms";
import Services from "../routes/Services";
import HelpRegister from "../routes/HelpRegister";
import Jobs from "../routes/jobs";
import JoinUs from "../routes/JoinUs";
import Guidance from "../routes/Guidance";
import CommonFaqs from "../routes/CommonFaqs";
import CarTravelers from "../routes/CarTravelers";
import RoutePlan from "../routes/RoutePlan";
import CommonFatwa from "../routes/CommonFatwa";
import Coordinates from "../routes/Coordinates";
import Groups from "../routes/Groups";
import Tips from "../routes/Tips";
import ServicesCompany from "../routes/ServicesCompany";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "signin",
        element: <Login />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "daus",
        element: <Duas />,
      },
      {
        path: "helpinregister",
        element: <HelpRegister />,
      },
      {
        path: "profile",

        element:
          <ProtectionProvider>
            <Profile />
          </ProtectionProvider>

      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "terms-conditions",
        element: <Terms />,
      },
      {
        path: "jobs",
        element: <Jobs />,
      }
      ,
      {
        path: "joinus",
        element: <JoinUs />,
      },
      {
        path: "guidance",
        element: <Guidance />
      },
      {
        path: "CommonFaqs",
        element: <CommonFaqs />
      },
      {
        path: "CarTravelers",
        element: <CarTravelers />
      },
      {
        path: "RoutePlan",
        element: <RoutePlan />
      },
      {
        path: "CommonFatwa",
        element: <CommonFatwa />
      },
      {
        path: "Coordinates",
        element: <Coordinates />
      },
      {
        path: "Groups",
        element: <Groups />
      },
      {
        path: "tips",
        element: <Tips />
      },
      {
        path: "ServicesPage",
        element: <ServicesCompany />
      },
    ],
  },
]);
