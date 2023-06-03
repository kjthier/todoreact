import React from 'react'

export default function UnCheckAllBtn({unCheckAll}) {
  return (
    <button onClick={() => unCheckAll()} className='btn btn-warning'>Uncheck All</button>
  )
}
