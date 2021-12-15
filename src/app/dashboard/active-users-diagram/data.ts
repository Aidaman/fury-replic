export interface IChartData {
  name: string;
  series: {
    name: string;
    value: number;
  }[]
}

export var data: IChartData[] = createData();

export function createData() : any[]{
  let tmpArr = new Array();
  for (let i = 0; i < 20; i++) {
    tmpArr.push({
      name: "a few seconds ago" + i,
      value: Math.round(Math.random() * (100 - 10) + 10)
    });
  }
  let tmpData : IChartData[] = [
    {
      name: "",
      series: tmpArr
    }
  ]
  return tmpData;
}