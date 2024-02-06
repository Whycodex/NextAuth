"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const Login = () => {
  const session = useSession();
  console.log(session);
  if (session.status === "loading") {
    return <h1>Loading</h1>;
  }
  if (session.status === "authenticated") {
    return <button onClick={() => signOut("google")}>Logout</button>;
  }
  return (
    <>
      <button onClick={() => signIn("google")}>SignIn with Google</button>
      <button onClick={() => signIn("github")}>SignIn with Github</button>
    </>
  );
};

export default Login;
