import React from 'react'
import s from './index.module.css'
export default function Card({title, price, country}) {
  return (
    <div className = {s.container}>
        <p>Name: {title}</p>
        <p>Price: {price} rub</p>
        <p>Country: {country}</p>
    </div>
  )
}
