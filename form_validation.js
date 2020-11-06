function validation()
{
var alphabet = /^[a-zA-Z]+$/;
var email_tester = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
var a = document.form.first_name.value;
var b = document.form.last_name.value;
var c = document.form.address.value;
var d = document.form.city.value;
var e = document.form.state.value;
var f = document.form.zip_code.value;
var g = document.form.phone_number.value;
var h = document.form.email.value;
var i = document.form.password.value;
var j = document.form.password_verification.value;
var k = document.form.card_number.value;
var l = document.form.card_CVV.value;
var m = document.form.expiration_date.value;
var n = document.form.expiration_date1.value;

if(a=="")
{
alert("Please enter your first name.");
document.form.first_name.focus();
return false;
}
if(!alphabet.test(a))
{
alert("Please enter only characters for your first name.");
document.form.first_name.select();
return false;
}



if(b=="")
{
alert("Please enter your last name.");
document.form.last_name.focus();
return false;
}
if(!alphabet.test(b))
{
alert("Please enter only characters for your last name.");
document.form.last_name.select();
return false;
}




if(c=="")
{
alert("Please enter your address.");
document.form.address.focus();
return false;
}
if(c.length < 9)
{
alert("Please enter a valid address.");
document.form.address.select();
return false;
}



if(d=="")
{
alert("Please enter your city.");
document.form.city.focus();
return false;
}
if(!alphabet.test(d))
{
alert("Please enter only characters for the city.");
document.form.city.select();
return false;
}
if(d.length < 3)
{
alert("Please enter a valid city.");
document.form.city.select();
return false;
}



if(e=="")
{
alert("Please enter your state.");
document.form.state.focus();
return false;
}

if(!alphabet.test(e))
{
alert("Please enter only characters for the state.");
document.form.state.select();
return false;
}

if(e.length < 2)
{
alert("Please enter a valid state.");
document.form.state.focus();
return false; 
}



if(f=="")
{
alert("Please enter your ZIP code.");
document.form.zip_code.focus();
return false;
}
if(f.length < 5)
{
alert("Please enter a valid ZIP code.");
document.form.zip_code.focus();
return false; 
}

if(isNaN(f))
{
alert("Please enter only numbers for your ZIP Code.");
document.form.zip_code.select();
return false;
}




if(g=="")
{
alert("Please enter your phone number.");
document.form.phone_number.focus();
return false;
}

if(isNaN(g))
{
alert("Please enter only numbers for your phone number.");
document.form.phone_number.select();
return false;
}

if(g.length < 10)
{
alert("Please enter a valid phone number.")
document.form.phone_number.select();
return false;
}

if ((document.form.interests[0].checked == false) && 
(document.form.interests[1].checked == false) && 
(document.form.interests[2].checked == false))
{
 alert("please select a reason why you're joining us. " );
  document.form.interests.focus();
   return false;
}


if(h=="")
{
alert("Please enter your email address.");
document.form.email.focus();
return false;
}

if (!email_tester.test(h))
{
alert("Please enter a valid email address");
document.form.email.select();
return false;
}

if(i=="")
{
alert("Please enter your password.");
document.form.password.focus();
return false;
}

if (i.length < 8)
{
alert("Your password must be atleast 8 characters/numbers long.");
document.form.password.select();
return false;
}


if(j=="")
{
alert("Please confirm the password.");
document.form.password.focus();
return false;
}

if (i != j)
{
alert("These passwords don't match, please try confirming them again.");
document.form.password_verication.select();
return false;
}

if ((document.form.card[0].checked == false) && 
(document.form.card[1].checked == false)&& 
(document.form.card[2].checked == false)&&
(document.form.card[3].checked == false))
{
  alert("please your card type." );
  document.form.card.focus();
  return false;
}
if(k=="")
{
alert("Please enter your card number.");
document.form.card_number.focus();
return false;
}
if(isNaN(k))
{
alert("Please enter only numbers for your card number.");
document.form.card_number.select();
return false;
}
if(k.length < 16)
{
alert("Please enter a valid card number.");
document.form.card_number.select();
return false;
}

if(l=="")
{
alert("Please enter your card CVV.");
document.form.card_CVV.focus();
return false;
}
if(isNaN(l))
{
alert("Please enter only numbers for your card CVV.");
document.form.card_CVV.select();
return false;
}
if(l.length < 3)
{
alert("Please enter a valid card CVV.");
document.form.card_CVV.select();
return false;
}

if(document.form.expiration_date.selectedIndex== 0)
{
alert("Please select the month in which your card expires.")
document.form.expiration_date.focus();
return false;
}

if(document.form.expiration_date1.selectedIndex == 0)
{
alert("Please select the year in which your card expires.")
document.form.expiration_date1.focus();
return false;
}


if ((document.form.plan[0].checked == false) && 
(document.form.plan[1].checked == false)&& 
(document.form.plan[2].checked == false))
{
  alert("please select a payment plan." );
  document.form.plan.focus();
  return false;
}
alert("Your form has been submitted. Thank You!");
return true;  
}