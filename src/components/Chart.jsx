import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const Chart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Order Value",
        type: "column",
        data: [
          1450, 2300, 3120, 4800, 2500, 3500, 1850, 4200, 3980, 2750, 1320,
          4680, 4000, 2600, 3300, 2050, 4700, 3200, 2400, 3700, 3100, 1900,
          4500, 2900, 3000, 4100, 2200, 4200, 3800, 3650,
        ],
      },
      {
        name: "Order Count",
        type: "line",
        data: [
          2, 7, 9, 4, 8, 6, 5, 3, 9, 4, 7, 3, 10, 5, 8, 6, 3, 7, 5, 9, 4, 2, 8,
          3, 9, 6, 5, 4, 10, 7,
        ],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
      },
      stroke: {
        width: [0, 4],
      },
      title: {
        text: "Monthly Report",
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1],
      },
      labels: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
      ],
      yaxis: [
        {
          title: {
            text: "Order Value",
          },
          min: 1000,
          max: 5000,
        },
        {
          opposite: true,
          title: {
            text: "Order Count",
          },
          min: 2,
          max: 10,
        },
      ],
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          height={400}
          width={1080}
          type="line"
        />
      </div>
    </div>
  );
};

export default Chart;
