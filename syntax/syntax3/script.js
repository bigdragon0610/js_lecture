// 普通の関数
console.log("---普通の関数---");
{
  let num1 = 1;
  let num2 = 2;
  let num3;

  // 関数の定義
  function add() {
    num3 = num1 + num2;
  }

  add(); // 関数の実行

  // console.log(num3); // ?
}

// アロー関数
console.log("---アロー関数---");
{
  let num1 = 3;
  let num2 = 2;
  let num3;

  // 関数の定義
  const subtract = () => {
    num3 = num1 - num2;
  };

  // 関数の実行
  subtract();

  // console.log(num3); // ?
}

// 引数
console.log("---引数---");
{
  let num;

  // 関数の定義
  function multiply(num1, num2) {
    num = num1 * num2;
  }

  // 関数の実行
  multiply(2, 3);
  // console.log(num); // ?

  multiply(4, 7);
  // console.log(num); // ?
}

// 戻り値 (普通の関数)
console.log("---戻り値 (普通の関数)---");
{
  // 関数の定義
  function add(num1, num2) {
    return num1 + num2;
  }

  // 関数の実行
  // console.log(add(1, 2)); // ?
  // console.log(add(10, 20)); // ?
}

// 【発展】戻り値 (アロー関数)
console.log("---【発展】戻り値 (アロー関数)");
{
  // 関数の定義
  const subtract = (num1, num2) => num1 - num2;

  /*
    以下と同義

    const subtract = (num1, num2) => {
      const num = num1 - num2;
      return num;
    }
  */

  // 関数の実行
  // console.log(subtract(70, 40)); // ?
}
