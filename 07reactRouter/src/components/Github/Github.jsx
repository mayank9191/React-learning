import React, { useEffect, useState } from "react";
import { useParams, useLoaderData } from "react-router-dom";




function Github() {
  const data = useLoaderData()

  // const { username } = useParams()

  // const [data, setData] = useState([])

  // useEffect(() => {
  //   fetch(`https://api.github.com/users/${username}`)
  //     .then((res) => res.json()).then((data) => {
  //       setData(data)
  //     }).catch((error) => error)
  // }, [])




  return (
    <div className="text-center bg-gray-700 text-white p-6 text-3xl max-w-sm mx-auto rounded-lg shadow-lg m-10">
      <img
        src={data.avatar_url}
        alt="GitHub Profile"
        className="w-50 h-50 mx-auto rounded-full"
      />
      <h2 className="mt-4 text-2xl font-semibold">GitHub Followers: {data.followers}</h2>
      <h2 className="mt-4 text-2xl font-semibold">GitHub Following: {data.following}</h2>
    </div>

  )

}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch(`https://api.github.com/users/mayank9191`)

  return response.json()

}