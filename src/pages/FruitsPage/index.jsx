import React from 'react'
import Card from '../../components/Card'
import s from './index.module.css'
export default function FruitsPage({fruits}) {
  return (
    <div className = {s.container}>
        {
            fruits.sort((a, b) => a.price - b.price).map(el => <Card key = {el.id} {...el} />)
        }
    </div>
  )
}
