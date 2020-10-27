window.onload=function(){
	document.getElementById('mushroomId').style.display = 'none';
	document.getElementById('faceId').style.display = 'none';
	document.getElementById('twitterId').style.display = 'none';
};


function moveCloud(){
	
	var pegaNuvem;
	pegaNuvem = document.getElementById('moveCloud');
	
	if(pegaNuvem.classList.contains('cloud-moved')){
		pegaNuvem.classList.remove('cloud-moved');
		pegaNuvem.classList.add('cloud');
		document.getElementById('faceId').style.display = 'none';

	}else{
		pegaNuvem.classList.remove('cloud');
		pegaNuvem.classList.add('cloud-moved');
		document.getElementById('faceId').style.display = 'block';

	}
}

function moveCloudDois(){
	
	var getNuvem;
	getNuvem = document.getElementById('cloudDoisID');
	
	if(getNuvem.classList.contains('cloud-dois-moved')){
		getNuvem.classList.remove('cloud-dois-moved');
		getNuvem.classList.add('cloud-Dois');	
		document.getElementById('twitterId').style.display = 'none';
	}else{
		getNuvem.classList.remove('cloud-Dois');
		getNuvem.classList.add('cloud-dois-moved');	
		document.getElementById('twitterId').style.display = 'block';
	}
}

function mario(event){
	var getMario = document.getElementById('marioId');
	var getMoshroom = document.getElementById('mushroomId');
	var getQuestion1 = document.getElementById('question1Id');
	var getQuestion2 = document.getElementById('question2Id');

	if(event.keyCode == 38){ 
		getMario.classList.remove('mario');
		getMario.classList.add('mario-moved-up');
		getMoshroom.style.display = 'block';
		getQuestion1.classList.remove('class23');
		getQuestion2.classList.remove('question-1');
		getQuestion1.classList.add('question-out');
    	
	}
	if(event.keyCode == 40 && document.getElementById('marioId').classList.contains('mario-moved-up')){
		getMario.classList.remove('mario-moved-up');
		getMario.classList.add('mario');
    	document.getElementById('mushroomId').style.display = 'none';
    	getQuestion1.classList.add('class23');
		getQuestion2.classList.add('question-1');
		getQuestion1.classList.remove('question-out');
	}
	
	if(document.getElementById('marioId').classList.contains('mario-moved-up') && event.keyCode == 39){
		getMario.classList.remove('mario-moved-up');
		getMario.classList.add('mario-moved-down');
		
		getMoshroom.classList.remove('mushroom');
		getMoshroom.classList.add('mushroom-moved');
		
	}
	
	
	
	
}

