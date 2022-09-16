// CSSの変更 (単数)
console.log("---CSSの変更 (単数)---");
{
  const button1 = document.getElementById("button1");
  const paragraph1 = document.getElementById("paragraph1");

  const button2 = document.getElementById("button2");
  const paragraph2 = document.getElementById("paragraph2");

  button1.addEventListener("click", () => {
    paragraph1.classList.toggle("red");
  });

  /*
    【問題】
    上の例のようにして、
    ボタン2をクリックしたら段落2の色が赤と青で切り替わるようにしてみましょう！
  */
}

// CSSの変更 (複数)
console.log("---CSSの変更 (複数)---");
{
  const button3 = document.getElementById("button3");
  const paragraphs = document.getElementsByName("paragraph");

  button3.addEventListener("click", () => {
    paragraphs.forEach((paragraph) => {
      paragraph.classList.toggle("green");
    });
  });

  /*
    【問題】
    背景色が緑になった後、ボタン１やボタン２を押しても赤くならない理由を考えてみましょう！
  */
}
