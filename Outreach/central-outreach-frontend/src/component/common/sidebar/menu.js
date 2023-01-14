import React from "react";
export const MENUITEMS = [
  // pe-7s-user-female pe-7s-id pe-7s-user
  {
    title: "Profile",
    icon: <i className="pe-7s-user "></i>,
    path: `${process.env.PUBLIC_URL}/user/dashboard`,
    active: true,
    bookmark: true,
    type: "button",
    id: "profile",
  },
  {
    title: "Workshops",
    icon: <i className="pe-7s-note2"></i>,
    path: `${process.env.PUBLIC_URL}/user/dashboard`,
    active: false,
    bookmark: true,
    type: "button",
    id: "ws",
  },
  {
    title: "Nodal Centres",
    icon: <i className="pe-7s-home pe-lg"></i>,
    path: `${process.env.PUBLIC_URL}/user/dashboard`,
    active: true,
    bookmark: true,
    type: "button",
    id: "nc",
  },
 
];
