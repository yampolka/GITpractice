
function RegisterClick()
{
  let modalHeader = document.getElementById("modalHeader");
   modalHeader.innerText = "Register, Please";

    let modal = document.getElementById('modal');
    let back = document.getElementById('background');
    document.getElementById("UserName").value= "";
    document.getElementById("Pass").value= "";
    document.getElementById("LoginID").value= "";
    back.style.display = 'block';
    modal.style.display = 'block';
}


function LoginClick ()
{

    let LoginID=   document.getElementById("IDLogin").value.toString();
    let Pass =document.getElementById("IDPass").value.toString();
    //if (Lo)
    let userdata =
    {"LoginID" :LoginID,
      "Pass" : Pass
    }
  // alert (userdata.LoginID) ;
    PostUser(userdata);
}
function confirmInputAddRow()
{



      let UserName=document.getElementById("UserName").value;
     let  LoginID=document.getElementById("LoginID").value;
     let  Pass= document.getElementById("Pass").value;

    let userInfo =
        { "LoginID" :LoginID,
          "Pass" : Pass,
           "UserName": UserName

        }
    PostUserInfo(userInfo);

}


function hideModal()
{

    let modal = document.getElementById('modal');
    let back = document.getElementById('background');
    back.style.display = 'none';
    modal.style.display = 'none';
    let row=   document.getElementById(CurrentEdit.toString());
    row.style.background = "";


}
function PostUser(userData) {

    let jsonD = JSON.stringify(userData);
    let url ='http://localhost:5000/ValidUser';

    $.ajax({
        type: 'POST',
        cache: false,
        contentType: 'application/json',
        url: url,
        data :jsonD,
        //   dataType: 'json', //why???
        success: function (res) {
             if (res.length>0)
             {
                 console.log(res);
                 alert("Hi,"+ res[0].UserName);
             }
             else
             {
                 alert ('Register first, please ')
             }
        },
        error: function(xhr) {
            //let a="kkkk";
            console.log(xhr.responseText);
          //  alert (2);
        }
    });
}

function PostUserInfo(jsonData) {

    let jsonD = JSON.stringify(jsonData);
    let url ='http://localhost:5000/insertUser';

    $.ajax({
        type: 'POST',
        cache: false,
        contentType: 'application/json',
        url: url,
        data :jsonD,
        //   dataType: 'json', //why???
        success: function (response) {
               alert("You are registred");
            hideModal();
        },
        error: function(xhr) {

            console.log(xhr.responseText);
        }
    });
}


