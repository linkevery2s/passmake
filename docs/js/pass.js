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
$("#sns").hide();
$("#rule").hide();
$("#qr").hide();
$("#rss").hide();
$("#main").show();
}

function share(){
$("#main").hide();
$("#sns").show();
$("#rss").hide();
$("#rule").hide();
$("#qr").show();
}

function rss(){
$("#main").hide();
$("#rule").hide();
$("#sns").hide();
$("#rss").show();
$("#qr").hide();
}

function rule(){
$("#main").hide();
$("#sns").hide();
$("#qr").hide();
$("#rss").hide();
$("#rule").show();
}
