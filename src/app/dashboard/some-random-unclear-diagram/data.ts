export interface IChartData {
    name: string;
    series: {
      name: string;
      value: number;
    }[]
  }

  export var data: IChartData[] = createData();

  function createData() : IChartData[]{
    let tmpArr = new Array();
    for (let i = 0; i < 50; i++) {
        tmpArr.push({
            name: i+1,
            value: Math.round(Math.random() * (100 - 10) + 10),
        })        
    }
    let tmpData = [{
      name: " ",
      series: tmpArr
    }];
    return tmpData;
  }