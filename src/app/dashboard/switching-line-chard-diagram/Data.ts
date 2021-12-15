export interface IChartData {
  name: string;
  series: {
    name: string;
    value: number;
  }[]
}

export var usersData: IChartData[] = [
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
    },
]
export var sessionData: IChartData[] = [
  {
    name: "Sessions",
      series: [
      {
        name: " Monday",
        value: Math.round(Math.random() * (50 - 10) + 10)
      },
      {
        name: " Tuesday",
        value: Math.round(Math.random() * (50 - 10) + 10)
      },
      {
        name: " Wednesday",
        value: Math.round(Math.random() * (50 - 10) + 10)
      },
      {
        name: " Thursday",
        value: Math.round(Math.random() * (50 - 10) + 10)
      },
      {
        name: " Friday",
        value: Math.round(Math.random() * (50 - 10) + 10)
      }, 
      {
        name: " Saturday",
        value: Math.round(Math.random() * (50 - 10) + 10)
      },
      {
        name: " Sunday",
        value: Math.round(Math.random() * (50 - 10) + 10)
      },
    ]
  },
   
  {
    name: " Past Week",
      series: [
      {
        name: " Monday",
        value: Math.round(Math.random() * (50 - 10) + 10)
      },
      {
        name: " Tuesday",
        value: Math.round(Math.random() * (50 - 10) + 10)
      },
      {
        name: " Wednesday",
        value: Math.round(Math.random() * (50 - 10) + 10)
      },
      {
        name: " Thursday",
        value: Math.round(Math.random() * (50 - 10) + 10)
      },
      {
        name: " Friday",
        value: Math.round(Math.random() * (50 - 10) + 10)
      }, 
      {
        name: " Saturday",
        value: Math.round(Math.random() * (50 - 10) + 10)
      },
      {
        name: " Sunday",
        value: Math.round(Math.random() * (50 - 10) + 10)
      },
    ]
  },

]
export var bounceRateData: IChartData[] = [
  {
    name: "Bounce Rate",
    series: [
      {
        name: "Monday",
        value: Math.random() * (50 - 10) + 10
      },
      {
        name: "Tuesday",
        value: Math.random() * (50 - 10) + 10
      },
      {
        name: "Wednesday",
        value: Math.random() * (50 - 10) + 10
      },
      {
        name: "Thursday",
        value: Math.random() * (50 - 10) + 10
      },
      {
        name: "Friday",
        value: Math.random() * (50 - 10) + 10
      }, 
      {
        name: "Saturday",
        value: Math.random() * (50 - 10) + 10
      },
      {
        name: "Sunday",
        value: Math.random() * (50 - 10) + 10
      },
    ]
  },
  
  {
    name: "Bounce Rate Per Past Week",
    series: [
      {
        name: "Monday",
        value: Math.random() * (50 - 10) + 10
      },
      {
        name: "Tuesday",
        value: Math.random() * (50 - 10) + 10
      },
      {
        name: "Wednesday",
        value: Math.random() * (50 - 10) + 10
      },
      {
        name: "Thursday",
        value: Math.random() * (50 - 10) + 10
      },
      {
        name: "Friday",
        value: Math.random() * (50 - 10) + 10
      }, 
      {
        name: "Saturday",
        value: Math.random() * (50 - 10) + 10
      },
      {
        name: "Sunday",
        value: Math.random() * (50 - 10) + 10
      },
    ]
  },

]
export var sessionDurationData: IChartData[] = [
  {
    name: "Session Duration",
    series: [
      {
        name: "Monday",
        value: Math.random() * (50 - 10) + 10
      },
      {
        name: "Tuesday",
        value: Math.random() * (50 - 10) + 10
      },
      {
        name: "Wednesday",
        value: Math.random() * (50 - 10) + 10
      },
      {
        name: "Thursday",
        value: Math.random() * (50 - 10) + 10
      },
      {
        name: "Friday",
        value: Math.random() * (50 - 10) + 10
      }, 
      {
        name: "Saturday",
        value: Math.random() * (50 - 10) + 10
      },
      {
        name: "Sunday",
        value: Math.random() * (50 - 10) + 10
      },
    ]
  },
  
  {
    name: "Session Duration Per Past Week",
    series: [
      {
        name: "Monday",
        value: Math.random() * (50 - 10) + 10
      },
      {
        name: "Tuesday",
        value: Math.random() * (50 - 10) + 10
      },
      {
        name: "Wednesday",
        value: Math.random() * (50 - 10) + 10
      },
      {
        name: "Thursday",
        value: Math.random() * (50 - 10) + 10
      },
      {
        name: "Friday",
        value: Math.random() * (50 - 10) + 10
      }, 
      {
        name: "Saturday",
        value: Math.random() * (50 - 10) + 10
      },
      {
        name: "Sunday",
        value: Math.random() * (50 - 10) + 10
      },
    ]
  },

]

// export var multi = [
//   {
//   name: "Users >:00",
//   series: [
//       {
//         name: " Monday",
//         value: Math.round(Math.random() * (50 - 10) + 10)
//       },
//       {
//         name: " Tuesday",
//         value: Math.round(Math.random() * (50 - 10) + 10)
//       },
//       {
//         name: " Wednesday",
//         value: Math.round(Math.random() * (50 - 10) + 10)
//       },
//       {
//         name: " Thursday",
//         value: Math.round(Math.random() * (50 - 10) + 10)
//       },
//       {
//         name: " Friday",
//         value: Math.round(Math.random() * (50 - 10) + 10)
//       }, 
//       {
//         name: " Saturday",
//         value: Math.round(Math.random() * (50 - 10) + 10)
//       },
//       {
//         name: " Sunday",
//         value: Math.round(Math.random() * (50 - 10) + 10)
//       },
//     ]
//   }
// ]