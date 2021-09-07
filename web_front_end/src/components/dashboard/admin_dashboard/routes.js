
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
import Typography from "./Typography/Typography.js";
import Icons from "./Icons.js";
import Maps from "./Maps.js";
import NotificationsPage from "./Notifications.js";
import CustomerInfo from "./CustomerInfo/CustomerInfo";
import Customer from './Customer'


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  
  {
    path: "/table",
    name: "Aprovements",
    icon: CheckOutlined,
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Customer",
    icon: LibraryBooks,
    component: Customer,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Payment",
    icon: Money,
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/feedback",
    name: "FeedBacks",
    icon: Feedback,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: LocationOn,
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin",
  },
  {
    path: "/customer-info",
    name: "Customer Info",
    icon: PermDeviceInformation,
    component: CustomerInfo,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
];

export default dashboardRoutes;
