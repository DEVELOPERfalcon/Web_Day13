var n=0;
// while(true){
//     n++;
//     document.getElementById('hh').innerHTML = n;
//     // 이렇게 하면 안됨
//     // worker에서는 UI변경을 못함. 메엔스레드만 할 수 있음

//     // worker를 사용하는 사용자에게 출력하고자 하는 값을 전송
//     postMessage(n);
// }
// 위처럼 하면 너무 빨리 반복문이 돌아서, 그려낼 시간이 없어서 정상독작이 안됨

function fff(){
    n++;
    postMessage(n);
    setTimeout(fff, 500);   //0.5초 후에 fff()함수 호출
}
fff();