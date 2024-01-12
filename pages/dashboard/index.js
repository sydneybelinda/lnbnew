import { useSession, signIn, signOut } from "next-auth/react"
import {getSession } from "next-auth/react";
import {Link} from 'next/link'


import React, {useState} from "react";
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import Sidebar from "../../components/Dashboard/SideBar";
import { getAllAgencyEscorts, getUser } from "../../utils/Queries";
import AgencyEscorts from "../../components/Dashboard/AgencyEscorts";
// import withSession from '../../lib/session'
import PropTypes from 'prop-types'

import Footer from "../../components/_App/Footer";



const Dashboard = (props) => {
    const { data: session } = useSession()

    let escorts = []



  if (session) {

    escorts = props.escorts.rows;
    const user = session.user.username;
  
    // const [escorts, setEscorts] = useState(esc);
  
  
  
    const getEscorts = async () => {
  
      const es = await getAllAgencyEscorts()

      escorts = es.rows
  
    //  setEscorts(es.rows)
  
  
    }
  




    return (
      <>
      <div className="content">
        {/* <TopHeader />
        <Navbar /> */}

        <div className="dashboard-area ptb-100">
          <div className="container-fluid">
            <div className="row ex">
              <div className="col-md-12">
                <section className="ps-my-account ps-page--account">
                  <div className="row">
                    <Sidebar  user={session.user.username} />
                    <div className="col-lg-9">
                      <div className="ps-page__content">

                            <h3>Agency Dashboard</h3>
                            <hr />
                            <div className="notices">
                              This is your central point for all related
                              settings and configuration. Use this panel to
                              create/edit your public EscortGem agency profile,
                              Create/Edit Agency escorts, manage escort tours
                              and manage your account and settings.
                              <br />
                              <br />
                              Tip. Start by creating your public agency profile.
                              <br />
                              <br />
                              Keep checking this space new exciting things are
                              being added all the time!
                            </div>
                            <h5>Agency Escorts <span className="addnewescort"><Link href="/dashboard/editescort">add new</Link></span></h5>
                            <hr />
                            <div className="row">
                              {escorts &&
                                escorts.map((e) => <AgencyEscorts e={e} key={e.id} getall={() => getEscorts()} />)}
                            </div>

                        
                      </div>
                    </div>
                  </div>
                </section>
                {/* <AgencyInfo /> */}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}

export const getServerSideProps = async function (context) {

  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login", // some destination '/dashboard' Ex,
        permanent: false,
      },
    };
  }

  const escorts = await getAllAgencyEscorts();


  return {
    props: { escorts },
  };
  }

  export default Dashboard;