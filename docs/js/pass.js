function passmake() {

var vari = document.getElementsByName("vari");
var other = document.getElementsByName("other");

if(vari[0].checked){
	
	if( document.getElementById("other").checked){
	var word = '0123456789-_!';
	}else{
	var word = '0123456789';
	}

	var n = document.getElementById("number").value;
	
	word = word.split('');
	var pass = '';
	for (var i = 0; i < n; i++) {
    	pass += word[Math.floor(Math.random() * word.length)];
	}
	document.getElementById("text").value = pass ;

}else if(vari[1].checked){

	if( document.getElementById("other").checked){
	var word = 'abcdefghijklmnopqrstuvwxyz0123456789-_!';
	}else{
	var word = 'abcdefghijklmnopqrstuvwxyz0123456789';
	}

	var n = document.getElementById("number").value;
	
	word = word.split('');
	var pass = '';
	for (var i = 0; i < n; i++) {
    	pass += word[Math.floor(Math.random() * word.length)];
	}
	document.getElementById("text").value = pass ;

}else{

	if( document.getElementById("other").checked){
	var word = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_!';
	}else{
	var word = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	}

	var n = document.getElementById("number").value;
	
	word = word.split('');
	var pass = '';
	for (var i = 0; i < n; i++) {
    	pass += word[Math.floor(Math.random() * word.length)];
	}
	document.getElementById("text").value = pass ;


}

}

function home(){
$("#manual").hide();
$("#sns").show();
$("#rule").hide();
$("#qr").show();
$("#main").show();
}

function manual(){
$("#main").hide();
$("#sns").hide();
$("#rule").hide();
$("#qr").hide();
$("#manual").show();
}

function sns(){
$("#main").hide();
$("#manual").hide();
$("#rule").hide();
$("#sns").hide();
$("#qr").hide();
}

function rule(){
$("#main").hide();
$("#manual").hide();
$("#sns").hide();
$("#qr").hide();
$("#rule").show();
}
