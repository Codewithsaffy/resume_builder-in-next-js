"use server";

import { signIn, auth, signOut } from "@/auth";
import { Session } from "next-auth";

export const handleSignOut = async () => {
  await signOut()
  console.log("signout")
  // const session = await auth()
  // console.log(session)
}

export async function handleGoogleSignIn() {

  await signIn("google");
}

export async function handleGithubSignIn() {

  await signIn("github");
}

// export async function handleSignOut() {
//   console.log("signou")
//   await signOut();
// }

export async function getUser():Promise<Session | null> {
  const session = await auth();
  return session;
}

