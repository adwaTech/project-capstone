
import {
  LibraryBooks,
  BubbleChart,
  LocationOn,
  Notifications,
  Unarchive,
  Language,
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
import Typography from "./Typography/Typography.js";
import Icons from "./Icons.js";
import Maps from "./Maps.js";
import NotificationsPage from "./Notifications.js";
import CustomerInfo from "./CustomerInfo/CustomerInfo";


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Home",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  
  {
    path: "/table",
    name: "Auctions",
    icon: CheckOutlined,
    component: TableList,
    layout: "/user",
  },
  {
    path: "/typography",
    name: "FeedBacks",
    icon: LibraryBooks,
    component: Typography,
    layout: "/user",
  },
  {
    path: "/icons",
    name: "Post Auctions",
    icon: Money,
    component: Icons,
    layout: "/user",
  },
  {
    path: "/feedback",
    name: "Help and support",
    icon: Feedback,
    component: Dashboard,
    layout: "/user",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: LocationOn,
    component: Maps,
    layout: "/user",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/user",
  },
  {
    path: "/customer-info",
    name: "Customer Info",
    icon: PermDeviceInformation,
    component: CustomerInfo,
    layout: "/user",
  },
  {
    path: "/user",
    name: "profile",
    icon: Person,
    component: UserProfile,
    layout: "/user",
  },
];

export default dashboardRoutes;
