// 数字の足し算
console.log("---数字の足し算---");
{
  const num1 = 10;
  const num2 = 20;
  console.log(num1 + num2); // 30
}

// 文字の足し算
console.log("---文字の足し算---");
{
  const str1 = "10";
  const str2 = "20";
  console.log(str1 + str2); // "1020"
}

// 数字と文字の足し算
console.log("---数字と文字の足し算---");
{
  const num = 10;
  const str = "20";
  //   console.log(num + str); // ?
}

// 【発展】テンプレートリテラル
console.log("---【発展】テンプレートリテラル---");
{
  const num = 10;
  const str = 20;
  console.log("数字:" + num + "、 文字:" + str); // 普通の結合方法
  // console.log(`数字:${num}、文字:${str}`); // ?
}
