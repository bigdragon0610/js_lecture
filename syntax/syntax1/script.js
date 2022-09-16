// 変数
console.log("---変数---");
{
  // 宣言する
  let num = 1;
  console.log(num); //1

  // 再代入する
  num = 2;
  console.log(num); // 2

  // 再定義はエラーになる
  // let num = 3;
  // console.log(num);
}

// 定数
console.log("---定数---");
{
  const num = 1;
  console.log(num); // 1

  // 再代入はエラーになる
  // num = 2;
  // console.log(num);

  // 再定義もエラーになる
  // const num = 3;
  // console.log(num);
}

// 繰り返し (for文)
console.log("---繰り返し (for文)---");
{
  for (let i = 0; i < 10; i++) {
    // 初期値は0
    console.log(i);

    // 全ての処理が終わったら i++ (1足す) が発動する
  }
}
