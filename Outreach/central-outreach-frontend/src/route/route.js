// dashboard
import Default from "../component/general/dashboard/default";
import BasicDashboard from "../component/general/dashboard/BasicDashboard";
import CombinedView from "../component/general/dashboard/combinedview";
import Login from "../pages/authentication/login";
import Forgotpasswd from "../pages/authentication/forgotpasswd";
import NCComponent from "../component/general/dashboard/tables/iocncmaterial";
import WSComponent from "../component/general/dashboard/tables/iocwsmaterial";
import Emailsent from "../pages/authentication/emailsent";

export const routes = [
  { path: "/", Component: Login },
  { path: "/user/dashboard", Component: BasicDashboard },
  // { path: "/user/dashboard/nc", Component: NCComponent },
  // { path: "/user/dashboard/ws", Component: WSComponent },
  // { path: "/user/dashboard", Component: CombinedView },
  { path: "/pages/login", Component: Login },
  { path: "/forgetpwd", Component: Forgotpasswd },
  { path: "/emailsent", Component: Emailsent },
  // { path: "/:id", Component: DisplayFile },
];
