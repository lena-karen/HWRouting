import React from 'react'
import Card from '../../components/Card'
import s from './index.module.css'
export default function VegetablesPage({vegetables}) {
  return (
    <div className = {s.container}>
        {
            vegetables.sort((a, b) => a.price - b.price).map(el => <Card key = {el.id} {...el} />)
        }
    </div>
  )
}