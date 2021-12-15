export interface IChartData {
    name: string;
    series: {
      name: string;
      value: number;
    }[]
  }

  export var data: IChartData[] = [
    {
        name: "Users",
        series: [
            {
              name:  "Monday",
              value: Math.round(Math.random() * (50 - 10) + 10)
            },
            {
              name: "Tuesday",
              value: Math.round(Math.random() * (50 - 10) + 10)
            },
            {
              name: "Wednesday",
              value: Math.round(Math.random() * (50 - 10) + 10)
            },
            {
              name: "Thursday",
              value: Math.round(Math.random() * (50 - 10) + 10)
            },
            {
              name: "Friday",
              value: Math.round(Math.random() * (50 - 10) + 10)
            }, 
            {
              name: "Saturday",
              value: Math.round(Math.random() * (50 - 10) + 10)
            },
            {
              name: "Sunday",
              value: Math.round(Math.random() * (50 - 10) + 10)
            },
          ]
    },
      
    {
          name: " Past Week",
          series: [
              {
                name: "Monday",
                value: Math.round(Math.random() * (50 - 10) + 10)
              },
              {
                name: "Tuesday",
                value: Math.round(Math.random() * (50 - 10) + 10)
              },
              {
                name: "Wednesday",
                value: Math.round(Math.random() * (50 - 10) + 10)
              },
              {
                name: "Thursday",
                value: Math.round(Math.random() * (50 - 10) + 10)
              },
              {
                name: "Friday",
                value: Math.round(Math.random() * (50 - 10) + 10)
              }, 
              {
                name: "Saturday",
                value: Math.round(Math.random() * (50 - 10) + 10)
              },
              {
                name: "Sunday",
                value: Math.round(Math.random() * (50 - 10) + 10)
              },
            ]
    }
  ]

  function createData(){
    let tmpData = new Array();
    for (let i = 0; i < 7; i++) {
        tmpData.push({
            name: i+1,
            value: Math.round(Math.random() * (100 - 10) + 10),
        })        
    }
    return tmpData;
  }