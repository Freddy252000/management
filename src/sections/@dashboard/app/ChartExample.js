// import React, { useState } from "react";
// import { Chart, LineChart, BarChart, PieChart } from "@mui/chart";

// const ChartExample = () => {
//   const [purchaseData, setPurchaseData] = useState([
//     { month: "January", amount: 1000 },
//     { month: "February", amount: 2000 },
//     { month: "March", amount: 3000 },
//     { month: "April", amount: 4000 },
//     { month: "May", amount: 5000 },
//   ]);

//   const [salesData, setSalesData] = useState([
//     { month: "January", amount: 1500 },
//     { month: "February", amount: 2500 },
//     { month: "March", amount: 3500 },
//     { month: "April", amount: 4500 },
//     { month: "May", amount: 5500 },
//   ]);

//   return (
//     <div>
//       <h1>Purchase & Sales Chart</h1>
//       <LineChart
//         data={purchaseData}
//         xAxis={"month"}
//         yAxis={"amount"}
//         height={400}
//         margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
//       />
//       <BarChart
//         data={salesData}
//         xAxis={"month"}
//         yAxis={"amount"}
//         height={400}
//         margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
//       />
//       <PieChart
//         data={[
//           { label: "Purchase", value: purchaseData[0].amount },
//           { label: "Sales", value: salesData[0].amount },
//         ]}
//         height={400}
//         margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
//       />
//     </div>
//   );
// };

// export default ChartExample;
import React from 'react'

const ChartExample = () => {
  return (
    <div>ChartExample</div>
  )
}

export default ChartExample