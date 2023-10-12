"use client"

import { useState } from "react"
import "../../app/globals.css"
import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../Redux-toolkit/slice"

export default function Displayusers() {
  const useData = useSelector((data) => data.users)
  const dispatch = useDispatch();
  console.log(useData)
  return (
    <div className="display-user">
      <h7>Diaplay Users</h7>
      {

        useData.map((item) => (
          <div className="items">
            <div>{item.name}</div>
            <button onClick={()=>dispatch(removeUser(item.id))}>remove</button>
          </div>
        ))
      }
    </div>
  )
}