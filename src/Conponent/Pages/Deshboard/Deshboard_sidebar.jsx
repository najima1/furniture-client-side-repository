import React from "react";
import { useContext } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Link, Outlet } from "react-router-dom";
import UseUserRole from "../../Auth/UseUserRole";
import { AuthContext } from "../../Authcontext/ContextProvider";
import "./sidebar.css";

function Deshboard_sidebar() {
  const { collapseSidebar } = useProSidebar();
  const { user } = useContext(AuthContext);
  const [role] = UseUserRole(user?.email);

  return (
    // style={{ display: "flex", height: "100%" }}
    <div className="h-screen flex gap-x-5 ">
      <Sidebar>
        <Menu>
          <Menu>
            <div className="p-4 bg-teal-400 text-white">
              <h1 className="text-xl">
                {role ? `${role}`.toLocaleUpperCase() + " account" : ""}
              </h1>
              {user && user?.displayName}

              {/* <h1>{user?.displayName ? user.displayName : ""}</h1> */}
            </div>
            {role === "user" && (
              <MenuItem routerLink={<Link to="/deshboard/myorder" />}>
                My order
              </MenuItem>
            )}

            <div>
              {role === "seller" && (
                <MenuItem routerLink={<Link to="/deshboard/add_product" />}>
                  Add product
                </MenuItem>
              )}

              {role === "seller" && (
                <MenuItem routerLink={<Link to="/deshboard/sellerProduct" />}>
                  My products
                </MenuItem>
              )}
            </div>

            {/* admin route */}
            <div>
              {role === "admin" && (
                <MenuItem
                  routerLink={<Link to={`/deshboard/admin_user/${"seller"}`} />}
                >
                  All Sellers
                </MenuItem>
              )}
              {role === "admin" && (
                <MenuItem
                  routerLink={<Link to={`/deshboard/admin_user/${"user"}`} />}
                >
                  All Buyer
                </MenuItem>
              )}
            </div>
          </Menu>
        </Menu>
      </Sidebar>
      <main>
        <button onClick={() => collapseSidebar()}>
          <span className="p-2 text-orange-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        </button>

        {/* content here */}
        <div className="custonStyle">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
export default Deshboard_sidebar;
