
import React from 'react';

const renderSaplingStockByWarehouse = (warehouse, saplingStockByWarehouse, saplings_master) => {
  const arrayByWarehouse = saplingStockByWarehouse.filter(item => item.warehouse_name === warehouse);

  return saplings_master.map((sapling) => {
    const stockItem = arrayByWarehouse.find(stock => stock.sapling_item_name === sapling.saplings_name);

    return (
      <React.Fragment key={sapling.saplings_code}>
        <td>
          {stockItem ? (
            <span className='numCell'>
              <span>{stockItem.sum_sapling_inward}</span>
              <span>{stockItem.sum_sapling_outward}</span>
              <span>{stockItem.sapling_balance_stock}</span>
            </span>
          ) : (
            <span className='numCell'>
              <span>0</span>
              <span>-0</span>
              <span>0</span>
            </span>
          )}
        </td>
      </React.Fragment>
    );
  });
};

const TableComponentByWarehouse = ({ saplings_master, saplingStockByWarehouse }) => {

    
        const filteredWarehouse = [];
        saplingStockByWarehouse.filter(item => {
        const duplicate = filteredWarehouse.includes(item.warehouse_name);
           if (!duplicate) {
             filteredWarehouse.push(item.warehouse_name);
             return true;
            }
             return false;
        });

        filteredWarehouse.reverse();
      

        const tableRowByWarehouse = filteredWarehouse.map((warehouse , i) => (
         <tr key={i}>
           <td>
            <span>{warehouse}</span>
            <span className='rightRd'>
              <span>Total Stock</span>
              <span>Total Distribution</span>
              <span>Balance Stock</span>
            </span>
           </td>
            {renderSaplingStockByWarehouse(warehouse, saplingStockByWarehouse, saplings_master)}
        </tr> 
        ))

  return (
    <React.Fragment>
       {tableRowByWarehouse}
    </React.Fragment>
    
  );
};

export default TableComponentByWarehouse;
