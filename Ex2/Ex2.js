function myFunction(){
    let userInfo={}
    userInfo.userName=document.getElementById("userName").value
    userInfo.password=document.getElementById('password').value
  localStorage.setItem('userInfo',JSON.stringify(userInfo))
  
}

