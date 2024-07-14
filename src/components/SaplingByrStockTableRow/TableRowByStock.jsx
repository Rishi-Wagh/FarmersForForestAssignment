import React from 'react'

const TableRowByStock = ({saplings_master , saplingStockBySapling}) => {
    
   //console.log(saplingStockBySapling);

   const tableRows = saplings_master.map((sapling) => {
    // Find the corresponding stock item for the current sapling
    const stockItem = saplingStockBySapling.find((stock) => stock.sapling_item_code === sapling.saplings_code);

    //  console.log('test ',stockItem);

    return (
        <React.Fragment key={sapling.saplings_code}>
            <td>{stockItem ?
             <span className='numCell'>
               <span>{stockItem.sum_sapling_inward}</span>
               <span>{stockItem.sum_sapling_outward}</span>
               <span>{stockItem.sapling_balance_stock}</span>
             </span>
               : 
               <span className='numCell'>
               <span>0</span>
               <span>-0</span>
               <span>0</span>
             </span>}</td>
        </React.Fragment>
    );
});

  return (
    
        <tr>
           <td>
             <span className='leftTd'>All stock sampling</span>
                <span className = 'rightRd'>
                    <span>Total Stock</span>
                    <span>Total Distribution</span>
                    <span>Balance Stock</span>
                </span>
            </td>
                {tableRows}
        </tr>
    
  )
}

export default TableRowByStock