import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'
export default function Nav() {
  return (
    <nav className = {s.nav_menu}>
        <Link to = '/fruits_page'>Fruits</Link>
        <Link to = '/vegetables_page'>Vegetables</Link>
    </nav>
  )
}
