import React from 'react'
import { Outlet, Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <>
    <div className="flex w-full">
        <div className="card bg-base-300 rounded-box grid h-80 mt-7 flex-grow place-items-center">
        <Link to="company"><button className="btn">Company</button></Link>
        <Link to="team"><button className="btn">Team</button></Link></div>
        <div className="divider divider-horizontal"></div>
        <div className="card bg-base-300 rounded-box grid h-80 mt-7 flex-grow place-items-center"><Outlet/></div>
    </div>
    </>
  )
}
