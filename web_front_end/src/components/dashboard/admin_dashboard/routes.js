
import {
  LibraryBooks,
  LocationOn,
  Notifications,
  Dashboard,
  Person,
  CheckOutlined,
  Feedback,
  Lock
  
} from '@material-ui/icons'
import { strings } from "../../../language/language";
import  DashboardPage from './main_dashbaord/Dashboard';
import UserProfile  from './UserProfile.js';
import TableList from "./TableList.js";
import Icons from "./GenerateTokens.js";
import Maps from "./Maps.js";
import NotificationsPage from "./Notifications.js";
import CustomerInfo from "./CustomerInfo/CustomerInfo";
import Customer from './Customer';
import Auction_map from './Auction_map';
import {Gavel} from '@material-ui/icons'
// import { GenerateTokenReducer } from '../../../redux-state-managment/Reducers';



const dashboardRoutes = [
  {
    path: "/dashboard",
    name: strings.Dashboard,
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  
  {
    path: "/aprovements",
    name: strings.Aprovements,
    icon: CheckOutlined,
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/customer",
    name: strings.Customer,
    icon: LibraryBooks,
    component: Customer,
    layout: "/admin",
  },

  {
    path: "/feedback",
    name: strings.FeedBacks,
    icon: Feedback,
    component: NotificationsPage,
    layout: "/admin",
  },
  {
    path: "/customer_location",
    name: strings.CustomerLocation,
    icon: LocationOn,
    component:Maps,
    layout: "/admin",
  },
  {
    path: "/auction_location",
    name: strings.Auctionslocation,
    icon: Notifications,
    component: Auction_map,
    layout: "/admin",
  },
  {
    path: "/total-auction-info",
    name: strings.TotalAuctionInfo,
    icon: Gavel,
    component: CustomerInfo,
    layout: "/admin",
  },
  {
    path: "/generateToken",
    name: strings.GenerateToken,
    icon: Lock,
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/profile",
    name: strings.profile,
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
];

export default dashboardRoutes;
