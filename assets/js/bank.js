document.getElementById('deposit').addEventListener('click',function(){
    const depositIn = document.getElementById('depositIn')
    const depositInValue = depositIn.value
    const depositInValueInt = parseInt(depositInValue)
    const depositShow = document.getElementById('depositShow')
    const depositShowInTxt = depositShow.innerText
    const depositShowInt = parseInt(depositShowInTxt)
    const result = depositInValueInt + depositShowInt;
    depositShow.innerText = result
    depositIn.value = ''
    
    const totalShow = document.getElementById('totalShow')
    const totalShowInTxt = totalShow.innerText;
    const totalShowInt = parseInt(totalShowInTxt)
    const totalResult = depositInValueInt + totalShowInt
    totalShow.innerText = totalResult
})