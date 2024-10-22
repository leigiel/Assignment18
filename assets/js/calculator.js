document.getElementById('submit').addEventListener('click',function(){
    const firstNum = document.getElementById('firstNum').value;
    const secondNum = document.getElementById('secondNum').value;
    const firstNumInt = parseInt(firstNum);
    const secondNumInt = parseInt(secondNum);
    const summation = firstNumInt + secondNumInt
    const result = document.getElementById('result')
    result.innerText = summation
})  