// 配列
console.log("---配列---");
{
  const colors = ["red", "blue", "green", "yellow"];
  // console.log(colors[1]); // ?
}

// 配列の繰り返し①
console.log("---配列の繰り返し①---");
{
  const days = [
    ["月", "火", "水", "木", "金", "土", "日"],
    ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  ];

  /*
    【問題】
    配列「days」を用いて、

    月: Sun
    火: Tue
    水: Wed
    木: Thu
    金: Fri
    土: Sat
    日: Sun

    と表示してみましょう！

    【ヒント】
    ・繰り返し処理
    ・「月」はdays[0][0]
  */
}

// 配列の繰り返し②
console.log("---配列の繰り返し②---");
{
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  months.forEach((month) => {
    console.log(month);
  });
}
