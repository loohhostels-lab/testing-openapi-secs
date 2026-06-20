"use client";

import axios from "axios";

import type { components } from "types/generated"

// get the schema type of login endpoint
type AddUserRequest = components["schemas"]["AddUserRequest"];
type GetUserResponse = components["schemas"]["GetUser"];

export default async function Page() {
  const data: AddUserRequest = {
    email: "amitkys59@gmail.com",
    name: "sdfaf",
    password: 'sfasf'
  }

  const res = await axios.post<GetUserResponse>("http://localhost:3000", data)
  if (res.status !== 200) {
    throw new Error("Failed to add user")
  }

  console.log(res.data.email)


  return null;
}