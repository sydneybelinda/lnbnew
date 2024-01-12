import { useSession, signIn, signOut } from "next-auth/react"
import {getSession } from "next-auth/react";

import { getToken } from "next-auth/jwt"




// export async function getServerSideProps(context) {

//   const session = await getSession(context);
//   if (session) {
//     return {
//       redirect: {
//         destination: "/dashboard", // some destination '/dashboard' Ex,
//         permanent: false,
//       },
//     };
//   }
// }



export default function Login() {
    const { data: session } = useSession()

    

    // console.log(ses)

  if (session) {
    return (
      <>
        Signed in as {session.user.username} <br />
        <button onClick={() => signOut()}>Sign out</button>
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