import Dashboard from "../assets/svgs/dashboard.svg";
import Listings from "../assets/svgs/Location.svg";
import Contact from "../assets/svgs/Profile.svg";
import Account from "../assets/svgs/Wallet.svg";
import Request from "../assets/svgs/Calendar.svg";
import Insights from "../assets/svgs/Activity.svg";

export const navLinks = [
  //   { name: "Home", path: "/" },
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: Dashboard,
  },
  {
    name: "Listings",
    path: "/listings",
    icon: Listings,
  },
  {
    name: "Contacts",
    path: "/contacts",
    icon: Contact,
  },
  {
    name: "Account",
    path: "/account",
    icon: Account,
  },
  {
    name: "Request",
    path: "/request",
    icon: Request,
  },
  {
    name: "Insight",
    path: "/insight",
    icon: Insights,
  },
];
