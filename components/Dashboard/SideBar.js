import React, { Component } from "react";
import Link from 'next/link'
//import { signIn, signout, signOut, useSession } from "next-auth/client";
import { useSession, signIn, signOut } from "next-auth/react"
import accountLinks from "./SidebarLinks";

const SideBar = (props) => {
  const { data: session } = useSession()
  const user = props.user;

  return (
    <div className="col-lg-3">
      <div className="ps-section__left">
        <aside className="ps-widget--account-dashboard">
          <div className="ps-widget__header">
            {/* <img src="/img/users/3.jpg" /> */}
            {session && (
              <figure>
                <figcaption>{session.user.name}</figcaption>
                <p>{session.user.email}</p>
              </figure>
            )}
          </div>
          <div className="ps-widget__content">
            <ul className="ps-list--user-links sidebar">
              <li>
                <Link href="/dashboard" activeClassName="active"> Dashboard
                </Link>
              </li>

              <li>
                    <Link href="/dashboard/editescort" activeClassName="active">New Escort Profile
                    </Link>
                  </li>


              <li>
                <Link href="/dashboard/links" activeClassName="active">Manage Links
                </Link>
              </li>


     

         

              <li>
                <Link href="/api/auth/logout">
                    <i className="icon-power-switch"></i>
                    Logout
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default SideBar;
