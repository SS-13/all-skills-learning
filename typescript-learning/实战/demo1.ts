/*
Node 这一块基本上和Java、php一样
前端 原生 vue2(不要用ts) vue3(痛苦) react

var a = 10;
var a : string = '100'
var s : {} = 50; // {} == Object 

//go 
var s string = '200'

//dart
var s
string s = '200'

.d.ts 给js配对
index.js
index.d.ts

// node ts -> pm2 启动 cli ts-node deno
// gulp task

swc esbuild (vite snowpack)

vue3 ts vite 开发 esbuild esmoudle commonjs

webpack v8-compile-cache + Sparkplug  ==> 机器码？

开发 sdk rollup + parcel/snowpack  + rome（ts合集）
*/

// let ss : {} = 50;
const isDone1: boolean = true;
let num1: number = 0;
let hexLiteral1: number = 0xf00d;
let myName1: string = "sss";

function alertName(something: string | number): void {
  console.log("something: ", something.toString());
}

const unusable1: void = undefined;

// 接口cli
// interface Idata {
//   data: string;
// }

// 区别对待
//1.interface 不知道数据是什么类型!!! sdk的时候
//2.type 业务中的
//3.class 类型 node多 nest.js ioc 元编程
//4.抽象类

// 给vue扩展东西
interface Vue {}

const str = {
  data: "tsets",
};

