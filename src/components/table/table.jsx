import React from 'react'
import './table.style.scss'
import saplings_master from '../../saplings_master.json';
import saplingInwwardOutward from '../../saplinginwardoutward.json';
import TableHead from '../TableHead/TableHead';
import TableRowByStock from '../SaplingByrStockTableRow/TableRowByStock';
import TableComponentByWarehouse from '../TableComponentByWarehouse/TableComponentByWarehouse';



const Table = () => {

  const saplingsCodeMap = new Map();

  saplings_master.forEach((sapling, i) => {
        saplingsCodeMap.set(sapling.saplings_code , i);
    })

    //console.log(saplingsCodeMap);

    const saplingStockBySapling = saplingInwwardOutward.sapling_stock_res_by_sapling.sort((a,b) => {
        const first = saplingsCodeMap.get(a.sapling_item_code );
        const second = saplingsCodeMap.get(b.sapling_item_code );

        return first - second;
    })

    const saplingStockByWarehouse = saplingInwwardOutward.sapling_stock_res_by_warehouse.sort((a,b) => {
      const first = saplingsCodeMap.get(a.sapling_item_code );
      const second = saplingsCodeMap.get(b.sapling_item_code );

      return first - second;
  })

    //console.log(saplingStockByWarehouse);

  return (
    <div className="table-container">
        <table>
           <TableHead 
             saplings_master={saplings_master} />
            <tbody>
               <TableRowByStock 
                 saplings_master={saplings_master} 
                 saplingStockBySapling={saplingStockBySapling} />
               <TableComponentByWarehouse 
                 saplings_master={saplings_master} 
                 saplingInwwardOutward={saplingInwwardOutward} 
                 saplingStockByWarehouse={saplingStockByWarehouse} />
            </tbody>
        </table>
    </div>
  )
}

export default Table