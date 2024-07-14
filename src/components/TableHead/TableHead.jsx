import React from 'react'

const TableHead = ({saplings_master}) => {

    const saplingNameHeaders = saplings_master.map((sapling , i) => (
        <th key={i}>{sapling.saplings_name.toUpperCase()}</th>
   ))

  return (
         <thead>
              <tr>
                <th className='warehouse cell'>WAREHOUSE NAME</th>
                {saplingNameHeaders}
              </tr>  
         </thead>
    
  )
}

export default TableHead