let items = document.querySelectorAll('.item');
let index = 1;

setInterval(function(){
	if(index == 0){
		items[items.length-1].classList.remove('active');
	}
	if(index > 0) {
		items[index-1].classList.remove('active');
	}
	items[index].classList.add('active');
	index++;
	if(index == items.length){
		index = 0;
	}
}, 6000);