// insertAdjacentHTML
console.log("---insertAdjacentHTML---");
{
  const button1 = document.getElementById("button1");
  const main = document.getElementById("main");

  button1.addEventListener("click", () => {
    const div = document.createElement("div");
    div.innerHTML = "<p>追加されました</p>";
    main.insertAdjacentElement("beforeend", div);
  });
}

// 要素の繰り返し
console.log("---要素の繰り返し---");
{
  const button2 = document.getElementById("button2");
  const main = document.getElementById("main");
  const favorites = [
    { name: "たろう", color: "blue", food: "curry", number: 7 },
    { name: "じろう", color: "red", food: "pork", number: 11 },
    { name: "はなこ", color: "green", food: "salad", number: 5 },
  ];

  /*
    【問題】
    ボタン2を押した時、
    配列「favorites」を用いて

    【〇〇の好きなもの】
        色: △△
        食べ物: □□
        数字: ☆☆

    と人数分表示されるようにしてみましょう！
  */
}
