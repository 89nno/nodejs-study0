'use strict';     //strictモード
const number = process.argv[2] || 0;  //process.argvで「Node.js がデフォルトで提供してくれる、コマンドラインの引数が入った配列」添え字が2番なのもそういう決まりみたいなもの
　　　　　　　　　　//↑がfalsy（つまりコマンドライン（簡単に言えばコンソール）になんも文字入れなかったりだめな値）の時は0が入る
let sum = 0;
for (let i = 1; i <= number; i++) {　//1から入力した値（number）回数分足す
    sum = sum + i;
}
console.log(sum);