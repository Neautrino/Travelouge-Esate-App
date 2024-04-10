import React from 'react'
import {listData } from "../../lib/dummyData.js"
import Card from "../card/Card"

function List() {
  return (
    <div className='list'>
        {
            listData.map(item=>(
                <Card key={item.id} item={item} />
            ))
        }
    </div>
  )
}

export default List