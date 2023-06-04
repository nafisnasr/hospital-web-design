import Home from "./Pages/Home/Home";
import GetAppointment from "./Pages/GetAppointment/GetAppointment";
import DoctorsPage from "./Pages/DoctorsPage/DoctorsPage";
import AddressPage from "./Pages/AddressPage/AddressPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";

let routes = [
    { path: '/', element: <Home /> },
    { path: '/home', element: <Home /> },
    { path: '/get-appointment', element: <GetAppointment /> },
    { path: '/doctors', element: <DoctorsPage /> },
    { path: '/address', element: <AddressPage /> },
    { path: '/contact-us', element: <ContactPage /> },
    { path: '/about-us', element: <AboutUsPage /> },
]

export default routes;