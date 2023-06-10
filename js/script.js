let img=document.getElementById("img")
let header=document.getElementById("header")
let info=document.getElementById("info")
let page=document.getElementById("page")
let number=1
function change(){
	if(number==1){
		number++
		img.style.background="red"
		header.innerText="второй"
		info.innerText="второй"
		page.innerText="2/3"
	}
	
	else if(number==2){
		number++
		img.style.background="black"
		header.innerText="третий"
		info.innerText="третий"
		page.innerText="3/3"
	}
}
function back(){
	if(number==3){
		number--
		img.style.background="red"
		header.innerText="второй"
		info.innerText="второй"
		page.innerText="2/3"
	}
	
	else if(number==2){
		number--
		img.style.background="black"
		header.innerText="первий"
		info.innerText="первий"
		page.innerText="1/3"
	}
}