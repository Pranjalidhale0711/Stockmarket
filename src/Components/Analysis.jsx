import React, { useEffect, useState } from "react";
import { buyStock, getMonthlyData, getStock, getStockAnalysis } from "../Api/auth";
import { ChartDisplay } from "../Utilis/Chart";

function Analysis() {
  const [stockName, setStockName] = useState("");
  const [stockInfo, setStockInfo] = useState(null);
  const [year,setYear]=useState([]);
  const [peRatio,setPeRatio]=useState([]);
  const [mktCap,setmktCap]=useState([]);
  const [dividendYield,setDividentYield]=useState([]);
  const [pbRatio,setPbRatio]=useState([]);
  const [chartData, setChartData] = useState(null);
//   const [chartoptions,setChartOptions] = useState({}
//     "chartoptions1":[],
//     chartoptions2 : [],
// })
  const [chartOptions, setChartOptions] = useState(null);
  const [chartData2, setChartData2] = useState(null);
  const [date,setDate]=useState([]);
  const [low,setLow]=useState([]);
  const [chartOptions2, setChartOptions2] = useState(null);
  const [chartData3, setChartData3] = useState(null);
  const [chartOptions3, setChartOptions3] = useState(null);
  const [chartData4, setChartData4] = useState(null);
  const [chartOptions4, setChartOptions4] = useState(null);
  const [chartData5, setChartData5] = useState(null);
  const [chartOptions5, setChartOptions5] = useState(null);
  const handleSubmit = async () => {
    try {
      const response = await getStock(stockName);
      setStockInfo(response.stockInfo[0]);
    } catch (e) {
      console.log(e);
    }
   
    try {
    setChartData(null);
    setChartOptions(null);
    setChartData2(null);
    setChartOptions2(null);
    setChartData3(null);
    setChartOptions3(null);
    setChartData4(null);
    setChartOptions4(null);
    year.length=0;
    mktCap.length=0;
    dividendYield.length=0;
    peRatio.length=0;
    pbRatio.length=0;

     
        const response = await getStockAnalysis(stockName);
        // console.log(response.response);
        response.response.map((details)=>{
            // console.log(details.calendarYear);
            let temp = year;
            temp.push(details.calendarYear)
            setYear(temp);
            let temp2 = peRatio;
            temp2.push(details.peRatio);
            setPeRatio(temp2);
            let temp3 = mktCap;
            temp3.push(details.marketCap);
            setmktCap(temp3);
            let temp4 = dividendYield;
            temp4.push(details.dividendYield);
            setDividentYield(temp4);
            let temp5 =pbRatio ;
            temp5.push(Number(details.pbRatio));
            setPbRatio(temp5);
        }) 
        const data = [
            ["Year", "PE Ratio"],
            ...year.map((y, index) => [y, peRatio[index]])
          ];
          
          const options = {
            title: "PE Ratio Over Years",
            backgroundColor:'#FFFBF5',
            hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
            vAxis: { minValue: 0 },
            chartArea: { width: "50%", height: "70%" },
          };
          const data2 = [
            ["Year", "Market capital "],
            ...year.map((y, index) => [y, mktCap[index]])
          ];
          
          const options2 = {
            title: "Market capital Over Years",
            backgroundColor:'#FFFBF5',
            hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
            vAxis: { minValue: 0 },
            chartArea: { width: "50%", height: "70%" },
          };
          const data3 = [
            ["Year", "Pb ratio "],
            ...year.map((y, index) => [y, pbRatio[index]])
          ];
          
          const options3 = {
            title: "Pb ratio Over Years",
            hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
            backgroundColor:'#FFFBF5',
            vAxis: { minValue: 0 },
            chartArea: { width: "50%", height: "70%" },
          };
          const data4 = [
            ["Year", "Divident Yield "],
            ...year.map((y, index) => [y, dividendYield[index]])
          ];
          
          const options4 = {
            title: "Divident Yield ratio Over Years",
            hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
            vAxis: { minValue: 0 },
            backgroundColor:'#FFFBF5',
            chartArea: { width: "50%", height: "70%" },
          };
        setChartData(data);
        setChartOptions(options);
        setChartData2(data2);
        setChartOptions2(options2);
        setChartData3(data3);
        setChartOptions3(options3);
        setChartData4(data4);
        setChartOptions4(options4);
        
      } catch (e) {
        console.log(e);
      }
      try {
        const res = await getMonthlyData(stockName);
        // toast.success(res.message);
        date.length=0;
        low.length=0;
        console.log("monthly response is ",res.startingEntries);
        res.startingEntries.map((item)=>{
          const temp=date;
          temp.push(item.date);
          setDate(temp);
          const temp2=low;
          temp2.push(Number(item.low));
          console.log(item.low)
          setLow(temp2);
        })
        const data = [
          ["Date", "Price of stock"],
          ...low.map((y, index) => [ date[index],y])
        ];
        
        const options= {
          title: "Price vs Date",
          hAxis: { title: "Date", titleTextStyle: { color: "#333" } },
          vAxis: { minValue: 0 },
          backgroundColor:'#FFFBF5',
          chartArea: { width: "50%", height: "70%" },
        };
        setChartData5(data);
        setChartOptions5(options);
        // console.log(res);
      } catch (e) {
        // toast.error("Error in showing Graph");
        // console.log(e);
      }
  };


  
  return (
    <div className="flex justify-center  flex-col items-center w-full">
       <h1 className="text-5xl mt-9 font-extrabold mb-4 text-[#52057B]">Get Analysis Of Stocks</h1>
        <div className="my-4">
        <input
        className="border-2 border-lightpurple   bg-purple-100 p-2.5 rounded-md mb-2 sm:mb-0 sm:mr-2 w-full sm:w-48"
        placeholder="Enter Stock Name"
        onChange={(e) => setStockName(e.target.value)}
      />
      <button className="p-2.5 bg-[#7743DB] text-white rounded-lg hover:bg-[#C3ACD0] hover:text-black mb-2 sm:mb-0 w-full sm:w-48" onClick={handleSubmit}>
        Get Details
      </button>
        </div>
   
      <div className="flex justify-center items-center mt-4">
          {stockInfo && (
            <div className="text-black flex flex-col gap-5 p-2 rounded-md w-full sm:w-48">
              <p className="text-lg font-bold">Open: {stockInfo.open}</p>
              <p className="text-lg font-bold">Close: {stockInfo.close}</p>
              <p className="text-lg font-bold">Low: {stockInfo.low}</p>
              <p className="text-lg font-bold">High: {stockInfo.high}</p>
            </div>
          )}
        </div>
        <div className="w-full">
        <div className="w-full">
        {date.length > 0 && (
          <ChartDisplay data={chartData5} options={chartOptions5} />
        )}
      </div>
        {year.length > 0 && (
          <ChartDisplay data={chartData} options={chartOptions} />
        )}
      </div>
      <div className="w-full">
        {year.length > 0 && (
          <ChartDisplay data={chartData2} options={chartOptions2} />
        )}
      </div>
      <div className="w-full">
        {year.length > 0 && (
          <ChartDisplay data={chartData3} options={chartOptions3} />
        )}
      </div>
      <div className="w-full">
        {year.length > 0 && (
          <ChartDisplay data={chartData4} options={chartOptions4} />
        )}
      </div>
    </div>
  );
}

export default Analysis;
