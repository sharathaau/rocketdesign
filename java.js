fuction click(){
	var user=document.getElementById('username');
	var pass=document.getElementById('password');
	var coruser="test";
	var corpass="123";
	if(user.value==coruser)
	{
		if(pass.value==corpass)
		{
			window.alert("you are loggerd in as"+user.value);
			
		}
		else{
			window.alert("incorect user name or pass");
		}
	
	}
	else{
			window.alert("incorect user name or pass");
		}
}