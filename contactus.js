
function getvalue(){
var checkname = document.getElementById('name').value ;
var checkaccountname = document.getElementById('accountname').value ;
var checkemail = document.getElementById('email').value ;
var checkquery = document.getElementById('query').value ;

if(checkname==""){
	alert("Name section is empty");
}else if(checkaccountname==""){
	alert("Account Name section is empty");
}else if(checkemail==""){
	alert("Email section is empty");
}else if(checkquery==""){
	alert("Please write your query");
}else {
	alert("We will write back to you shortly");
}
}