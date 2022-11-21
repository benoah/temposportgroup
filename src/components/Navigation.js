import React from 'react'

export default function Navigation() {
  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Tempo Sport Group</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><a>Football</a></li>
      <li><a>Esport</a></li>
      <li><a>Our Team</a></li>
    </ul>
  </div>
</div>
  )
}
