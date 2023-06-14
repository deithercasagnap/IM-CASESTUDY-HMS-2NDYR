// import { useState } from 'react'
// import * as React from 'react'
// import DataTable from 'react-data-table-component'

// // imported icons from react-icons ===>
// import {AiOutlineSearch} from 'react-icons/ai'
// import {FaUsers} from 'react-icons/fa'

// function PatientTable() {

//   const columns = [
//     {
//         name: 'Customer',
//         selector: row => row.customer,
//         sortable: true
//     },
//     {
//         name: 'Email',
//         selector: row => row.email
//     },
//     {
//         name: 'Deposit',
//         selector: row => row.deposit
//     },
//     {
//         name: 'Date',
//         selector: row => row.date
//     },
//     {
//         name: 'Voucher NO.',
//         selector: row => row.voucherNo
//     }
//   ]

//   const data = [
//     {
//       customerID: 1001,
//       customer: 'airav Joshi',
//       email: 'nirav@gmail.com',
//       deposit: 'NGN 34,600',
//       date: 'March 6, 2022 09:21',
//       voucherNo: '00437E'
//     },
//     {
//       CustomerID: 1002,
//       customer: 'Sunil Joshi',
//       email: 'nirav@gmail.com',
//       deposit: 'NGN 34,600',
//       date: 'May 6, 2022 09:21',
//       voucherNo: '00437E'
//     },
//     {
//       CustomerID: 1003,
//       customer: 'Zunil Joshi',
//       email: 'nirav@gmail.com',
//       deposit: 'NGN 34,600',
//       date: 'Dec 16, 2022 09:21',
//       voucherNo: '00437E'
//     },
//     {
//       CustomerID: 1002,
//       customer: 'Punil Joshi',
//       email: 'nirav@gmail.com',
//       deposit: 'NGN 34,600',
//       date: 'Dec 6, 2022 09:21',
//       voucherNo: '00437E'
//     },
//     {
//       CustomerID: 1004,
//       customer: 'Ounil Joshi',
//       email: 'nirav@gmail.com',
//       deposit: 'NGN 34,600',
//       date: 'Nov 6, 2022 09:21',
//       voucherNo: '00437E'
//     },
//    {
//     CustomerID: 1005,
//     customer: 'Lunil Joshi',
//     email: 'nirav@gmail.com',
//     deposit: 'NGN 34,600',
//     date: 'Feb 6, 2022 09:21',
//     voucherNo: '00437E'
//     },
//     {
//       CustomerID: 1002,
//       customer: 'Sunil Joshi',
//       email: 'nirav@gmail.com',
//       deposit: 'NGN 34,600',
//       date: 'May 6, 2022 09:21',
//       voucherNo: '00437E'
//     },
//     {
//       CustomerID: 1003,
//       customer: 'Zunil Joshi',
//       email: 'nirav@gmail.com',
//       deposit: 'NGN 34,600',
//       date: 'Dec 16, 2022 09:21',
//       voucherNo: '00437E'
//     },
//     {
//       CustomerID: 1002,
//       customer: 'Punil Joshi',
//       email: 'nirav@gmail.com',
//       deposit: 'NGN 34,600',
//       date: 'Dec 6, 2022 09:21',
//       voucherNo: '00437E'
//     },
//     {
//       CustomerID: 1004,
//       customer: 'Ounil Joshi',
//       email: 'nirav@gmail.com',
//       deposit: 'NGN 34,600',
//       date: 'Nov 6, 2022 09:21',
//       voucherNo: '00437E'
//     },
//    {
//     CustomerID: 1005,
//     customer: 'Lunil Joshi',
//     email: 'nirav@gmail.com',
//     deposit: 'NGN 34,600',
//     date: 'Feb 6, 2022 09:21',
//     voucherNo: '00437E'
//     },
//     {
//       CustomerID: 1002,
//       customer: 'Sunil Joshi',
//       email: 'nirav@gmail.com',
//       deposit: 'NGN 34,600',
//       date: 'May 6, 2022 09:21',
//       voucherNo: '00437E'
//     },
//     {
//       CustomerID: 1003,
//       customer: 'Zunil Joshi',
//       email: 'nirav@gmail.com',
//       deposit: 'NGN 34,600',
//       date: 'Dec 16, 2022 09:21',
//       voucherNo: '00437E'
//     },
//     {
//       CustomerID: 1002,
//       customer: 'Punil Joshi',
//       email: 'nirav@gmail.com',
//       deposit: 'NGN 34,600',
//       date: 'Dec 6, 2022 09:21',
//       voucherNo: '00437E'
//     },
//     {
//       CustomerID: 1004,
//       customer: 'Ounil Joshi',
//       email: 'nirav@gmail.com',
//       deposit: 'NGN 34,600',
//       date: 'Nov 6, 2022 09:21',
//       voucherNo: '00437E'
//     },
//    {
//     CustomerID: 1005,
//     customer: 'Lunil Joshi',
//     email: 'nirav@gmail.com',
//     deposit: 'NGN 34,600',
//     date: 'Feb 6, 2022 09:21',
//     voucherNo: '00437E'
//     },
//     {
//       CustomerID: 1002,
//       customer: 'Sunil Joshi',
//       email: 'nirav@gmail.com',
//       deposit: 'NGN 34,600',
//       date: 'May 6, 2022 09:21',
//       voucherNo: '00437E'
//     },
//     {
//       CustomerID: 1003,
//       customer: 'Zunil Joshi',
//       email: 'nirav@gmail.com',
//       deposit: 'NGN 34,600',
//       date: 'Dec 16, 2022 09:21',
//       voucherNo: '00437E'
//     },
//     {
//       CustomerID: 1002,
//       customer: 'Punil Joshi',
//       email: 'nirav@gmail.com',
//       deposit: 'NGN 34,600',
//       date: 'Dec 6, 2022 09:21',
//       voucherNo: '00437E'
//     },
//     {
//       CustomerID: 1004,
//       customer: 'Ounil Joshi',
//       email: 'nirav@gmail.com',
//       deposit: 'NGN 34,600',
//       date: 'Nov 6, 2022 09:21',
//       voucherNo: '00437E'
//     },
//    {
//     CustomerID: 1005,
//     customer: 'Lunil Joshi',
//     email: 'nirav@gmail.com',
//     deposit: 'NGN 34,600',
//     date: 'Feb 6, 2022 09:21',
//     voucherNo: '00437E'
//     }
  
//   ]

//   const [records, setRecords] = useState(data);

//   function handleFilter(event) {
//     const newData = data.filter(row => {
//         return row.customer.toLowerCase().includes(event.target.value.toLowerCase())
//     })
//     setRecords(newData)
//   }
//   return (
//     <>


//         <div className='flex justify-center shadow-lg'>
        
//             <div className='container justify-center text-center text-textColor border-[1px]'>
                
//                 <div className='grid grid-cols-2 items-center justify-between ms-3 me-3 border-b-[1px] py-[0.5rem] mb-3'>

//                 <div className='flex items-center' >
//                     <FaUsers className='text-[20px] me-2 icon '/>
//                     <h4>All Patients</h4>
//                 </div>
                
//                 <div className='flex justify-end items-center text-end ' >
//                     <AiOutlineSearch className='text-[20px] me-1 icon'/>
//                     <input className='ps-3 w-[30%] text-[13px] border-[1px] border-textColor p-1 rounded-[10px]' type="text" placeholder='Search Patient Here...' onChange={handleFilter} />
                    
//                 </div>

//                 </div>
                

//                 <div className='flex h-[200px] w-[100%]'>
//                     <DataTable   
//                         columns = {columns}
//                         data = {records}
//                         selectableRows
//                         fixedHeader
//                         // pagination
//                     >
//                     </DataTable>
//                 </div>

                
//             </div>
//         </div>
//     </>
    
//   )
// }

// export default PatientTable;