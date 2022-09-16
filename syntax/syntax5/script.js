// オブジェクト
console.log("---オブジェクト---");
{
  const favorite = {
    color: "blue",
    food: "curry",
    number: 7,
  };

  console.log(`
  【好きなもの】
    色: ${favorite.color}
    食べ物: ${favorite.food}
    数字: ${favorite.number}
  `);
}

// 配列とオブジェクトの組み合わせ
console.log("---配列とオブジェクトの組み合わせ---");
{
  const favorites = [
    { name: "たろう", color: "blue", food: "curry", number: 7 },
    { name: "じろう", color: "red", food: "pork", number: 11 },
    { name: "はなこ", color: "green", food: "salad", number: 5 },
  ];

  /*
    【問題】
    配列「favorites」を用いて、

    【〇〇の好きなもの】
        色: △△
        食べ物: □□
        数字: ☆☆

    と人数分表示してみましょう！
  */
}
