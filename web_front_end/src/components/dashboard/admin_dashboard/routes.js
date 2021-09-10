
import {
  LibraryBooks,
  LocationOn,
  Notifications,
  Dashboard,
  Person,
  CheckOutlined,
  Feedback,
  Money,
  PermDeviceInformation,
  
} from '@material-ui/icons'
import  DashboardPage from './main_dashbaord/Dashboard';
import UserProfile  from './UserProfile.js';
import TableList from "./TableList.js";
import Icons from "./Icons.js";
import Maps from "./Maps.js";
import NotificationsPage from "./Notifications.js";
import CustomerInfo from "./CustomerInfo/CustomerInfo";
import Customer from './Customer';
import Auction_map from './Auction_map';
import {Gavel} from '@material-ui/icons'


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  
  {
    path: "/aprovements",
    name: "Aprovements",
    icon: CheckOutlined,
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/customer",
    name: "Customer",
    icon: LibraryBooks,
    component: Customer,
    layout: "/admin",
  },
  // {
  //   path: "/payment",
  //   name: "Payment",
  //   icon: Money,
  //   component: Icons,
  //   layout: "/admin",
  // },
  {
    path: "/feedback",
    name: "FeedBacks",
    icon: Feedback,
    component: NotificationsPage,
    layout: "/admin",
  },
  {
    path: "/customer_location",
    name: "Customer Location",
    icon: LocationOn,
    component:Maps,
    layout: "/admin",
  },
  {
    path: "/auction_location",
    name: "Auctions_location",
    icon: Notifications,
    component: Auction_map,
    layout: "/admin",
  },
  {
    path: "/total-auction-info",
    name: "Total Auction Info",
    icon: Gavel,
    component: CustomerInfo,
    layout: "/admin",
  },
  {
    path: "/profile",
    name: "profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
];

export default dashboardRoutes;
