import React from 'react'
import NewItemCard from './NewItemCard'

function NewItems() {
  return (
    <div className="container pt-3 pb-3">
      <div className="row">
        <div className="col-md-12">
          <h2 className="text-start">New Items</h2>
          <div className="d-flex flex-wrap justify-content-between">
            <NewItemCard />
            <NewItemCard />
            <NewItemCard />
            <NewItemCard />
            <NewItemCard />
            <NewItemCard />
            <NewItemCard />
            <NewItemCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewItems