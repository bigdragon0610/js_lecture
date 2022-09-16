// HTML要素を単数で取得
console.log("---HTML要素を単数で取得---");
{
  const section1 = document.getElementById("section1");
  console.log(section1);

  const section2 = document.getElementById("section2");
  // console.log(section2.innerText); // ?
}

// HTML要素を複数で取得
console.log("---HTML要素を複数で取得---");
{
  const sections = document.getElementsByName("section");
  console.log(sections);

  /*
    【問題】
    「sections」を用いて

    1つ目のセクション
    2つ目のセクション

    と表示してみましょう！

    【ヒント】
    ・「sections」は配列として扱えます
    ・配列の繰り返しは…？
  */
}
