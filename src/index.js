let html = document.querySelector("#html");

let style = document.querySelector("#style");

let string = `/* 你好，我是silent-cat,接下来我会画出一个太极 */
/* 第一步，准备一个圆 */
#div{
    position: fixed;
    left: 65%;
    transform: translate(-50%,-50%);
    top: 50%;
    width:80vh;
    height:80vh;
    border-radius:50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
}
/* 第二步,左白右黑 */
#div{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, 
    rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 第三步, 创建阴阳鱼 */
#div::before{
    width:40vh;
    height:40vh;
    content: "";
    display: block;
    position: absolute;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, 
    rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div::after{
    width:40vh;
    height:40vh;
    content: "";
    display: block;
    position: absolute;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, 
    rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
欢迎收看
`;

let string2 = "";
let n = -1;

let step = () => {
  setTimeout(() => {
    n++;
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp";
    } else {
      string2 += string[n];
    }

    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 9999);
    html.scrollTo(0, 9999);

    if (n < string.length - 1) {
      step();
    }
  }, 0);
};

step();
