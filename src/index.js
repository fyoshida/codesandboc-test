// const myProfile = {
//   name: "吉田",
//   age: 20
// =======
// // /**
// //  * const,let 等の変数宣言
// //  */
// };

// const message1 = "名前は${myProfile.name}です。年齢は${myProfile.age}です";
// console.log(message1);
// =======
// // var val1 = "var変数";
// // console.log(val1);

// const { name, age } = myProfile;
// const message2 = "名前は${name}です。年齢は${age}です";
// console.log(message2);

// //  var変数への上書き可能
// val1 = "var編巣を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言"
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数上書き";
// console.log(val2);

// // letは再宣言不可能
// // let val2="let変数再宣言";

// const val3="constで変数宣言"
// console.log(val3);

// const　変数は上書き不可能
// val3="上書き";

// const val3="aa";

// constで定義したオブジェクトはプロパティへの変更が可能
// const val4={
//   name: "吉田",
//   age : 200
// };

// val4.address = "新潟";
// val4.name="amazon"
// console.log(val4);

// constで定義した配列はプロパティへの変更が可能
// const val5=['dog','cat'];
// console.log(val5);
// val5[0] = 'bird';
// val5.push('monkey');

/**
 * テンプレート文字列
 */

//  const name="吉田";
//  const age =20;

// //  従来
// const message1="私の名前は"+name+"です。年齢は"+age+"です。";
// console.log(message1)

// // template文字列
// const message2 = `私の名前は${name}です。年齢は${age}です`;
// console.log(message2)

/**
 * アロー関数
 */

//  従来
// function funct1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(funct1("func1です"));

// // アロー関数
// const func2 = (str) => str;

// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(10, 20));

// const sayHello = (name = "吉田") => console.log(`${name}さん`);
// sayHello()

/**
 * スプレッド構文 ...
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);
// const sum = (num1, num2) => console.log(num1 + num2);
// sum(arr1[0], arr1[1]);
// sum(...arr1);

// // まとめる
// const arr2 = [1, 2, 3, 4, 5, 6];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// // 配列のコピー、結合

// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// console.log(arr6);
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

// const arr9 = [...arr4];
// arr9[0] = 10000;
// console.log(arr9);
// console.log(arr4);

/**
 * map,filter
 */

const nameArr = ["田中", "佐藤", "吉田"];
for (let index = 0; index < nameArr.length; index++) {
  console.log(nameArr[index]);
}

const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);

nameArr.map((name) => console.log(name));
