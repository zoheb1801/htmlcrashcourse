console.log('javascrpt')

var name=document.getElementById('name');
var email=document.getElementById('email')
var phoneNumber=document.getElementById('phone')
var form=document.getElementById('contact-form')

form.addEventListener('submit',(event)=>{
   event.preventDefault()
   if(name.value==''){
    alert("name is empy")
   }else{
    console.log(name.value)
   }
})