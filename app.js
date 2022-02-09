//Auth, Profile
// ===================================================== Registeration Form Starts Here ===================================================

// user registeration : name, email, mobile, gender, dob, password
const userRegisteration = {
    name : 'Muskaan Sharma',
    email : 'muskaansharma@gmail.com',
    mobile : 7874646028,
    gender : 'F',
    password : 'Pass_is_strong@1',
}

var errorMessage = '';
//1. name validation
function nameValidation(regName){
    regName = userRegisteration.name;
    let returnValue = true;

    if(regName === '' || regName.length < 1 || regName.length < 6 ){
        returnValue = false;
        errorMessage = 'Fill Correct Details';
        console.log(errorMessage);
    }
    if(regName.length > 20){
        errorMessage ='Enter Firstname and Lastname';
        console.log(errorMessage) 
    }

    if(/^[A-Za-z ]+$/.test(regName) === false){
        errorMessage = 'Enter Only Characters';
        console.log(errorMessage);
    }
    //console.log(/^[A-Za-z ]+$/.test(regName));
    return returnValue;
}

//2. email validation
function emailValidation(regEmail){
    regEmail = userRegisteration.email;
    let returnValue = true;

    if(regEmail === '' || regEmail.length < 1 || regEmail.length < 6 ){
        returnValue = false;
        errorMessage = 'Fill Correct Details';
        console.log(errorMessage);
    }
    
    if(regEmail.length > 30){
        errorMessage ='Email is too long';
        console.log(errorMessage);
    }
    
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(regEmail) === false){
        errorMessage = 'not a valid email';
        console.log(errorMessage);
    }
    // console.log(regEmail);
    return returnValue;

}

// mobile validation
function mobileValidation(regMobile){
    regMobile = userRegisteration.mobile;
    let returnValue = true;
    
    if(regMobile.toString().length === '' || regMobile.toString().length < 1 || regMobile.toString().length > 10 ){
        returnValue = false;
        errorMessage = 'Enter 10 Digit Mobile Number';
        console.log(errorMessage);
    }
  
    if (isNaN(regMobile) === true){ 
        errorMessage = 'Enter a Valid Number';
        console.log(errorMessage);
    }
     //console.log(regMobile);
    return returnValue;
}

// gender validation
function genderValidation(regGender){
    regGender = userRegisteration.gender;
    let returnValue = true;

    if(regGender !== 'F' && regGender !== 'M' && regGender !== 'T'){
        errorMessage = 'Please Select Your Gender';
        console.log(errorMessage);
        returnValue = false;
    }

    //console.log(regGender === 'F');
    return returnValue;
}

//password validation
function passwordValidation(regPassword) {
    regPassword = userRegisteration.password;
    let returnValue = true;

    if(regPassword.length < 8 || regPassword.length > 16){
        errorMessage = 'Password Must be of 16 Characters only';
        console.log(errorMessage);
        returnValue = true;
    }
    if(!regPassword.match(/[A-Za-z0-9*_$@]/g)){
        errorMessage ='Password Must Be Of 16 Characters and have atleast 1 Capital Letter, 1 Small Letter, 1 Number, 1 Symbol';
        console.log(errorMessage);
    }
    //console.log(regPassword.match(/[A-Za-z0-9*-_$@]/));
    return returnValue;
}
// nameValidation();
// emailValidation();
// mobileValidation();
// genderValidation();
// passwordValidation();


// ===================================================== Registeration Form Ended Here ===================================================


// ========================================================== Login Form Starts Here ======================================================
// user login: email/mobile, password
const localStorageDetails = {
    name : 'Muskaan Sharma',
    email : 'muskaansharma@gmail.com',
    mobile : 7874646028,
    gender : 'F',
    password : 'Pass_is_strong@1',
}

function getLoginDetails(email, mobile, password){
    email = 'muskaansharma@gmail.com';
    mobile = 7874646028;
    password = 'Pass_is_strong@1';

    return {email, mobile, password};
}

function login(){
    let logEmail = localStorageDetails.email;
    let logMobile = localStorageDetails.mobile;
    let logPassword = localStorageDetails.password;
    const loginDetails = getLoginDetails();
    

    //console.log(loginDetails.email === logEmail);
    if(loginDetails.email !== logEmail || loginDetails.mobile !== logMobile || loginDetails.password !== logPassword){
        errorMessage = 'Invalid Email or Mobile Number and Password';
        console.log(errorMessage);
    }
    else if(loginDetails.email === logEmail || loginDetails.mobile === logMobile || loginDetails.password === logPassword){
        console.log('details matched, login sucessfull.');
    }
   
    return true;
}

//  login();

// ========================================================== Login Form Ends Here ======================================================



// ========================================================== Logout starts Here ======================================================
// user logout

function logout(){
    let loginDetails = getLoginDetails();
    loginDetails = '';

    if(loginDetails.toString().length<1){
        console.log('logout');
        console.log('location back to login');
    }
    return true;
}

// logout();
// ========================================================== Logout Ends Here ======================================================


// ========================================================== User Profile Starts Here ======================================================
// user profile view
function profileView(){
    let name = localStorageDetails.name;
    let email = localStorageDetails.email;
    let mobile = localStorageDetails.mobile;
    let gender = localStorageDetails.gender;

    console.log(`name: ${name} \nemail: ${email} \nmobile: ${mobile} \ngender: ${gender}`);
    return true;
}

// profileView();
// ========================================================== User Profile Ends Here ========================================================



// ==================================================== User Profile Edit Starts Here =====================================================
// user profile edit : name, email, mobile
function editProfile(){

    console.log(localStorageDetails.name);
    console.log(localStorageDetails.email);
    console.log(localStorageDetails.mobile);
    let errorMessage = '';

    let getProfileName = 'Nikhil Pandey';
    let getProfileEmail = 'nikhilr.pandey1@gmail.com';
    let getProfileMobile = 9984008863;

    localStorageDetails.name = getProfileName;
    localStorageDetails.email = getProfileEmail;
    localStorageDetails.mobile = getProfileMobile;

    console.log(localStorageDetails.name);
    console.log(localStorageDetails.email);
    console.log(localStorageDetails.mobile);

    editnameValidation();
    editemailValidation();
    editmobileValidation();

    function editnameValidation(name){
        this.name = getProfileName;
        let regName = this.name;
        let returnValue = true;
    
        if(regName === '' || regName.length < 1 || regName.length < 6 ){
            returnValue = false;
            errorMessage = 'Fill Correct Details';
            console.log(errorMessage);
        }
        if(regName.length > 20){
            errorMessage ='Enter Firstname and Lastname';
            console.log(errorMessage) 
        }
    
        if(/^[A-Za-z ]+$/.test(regName) === false){
            errorMessage = 'Enter Only Characters';
            console.log(errorMessage);
        }
        //console.log(/^[A-Za-z ]+$/.test(regName));
        return returnValue;
    }
    
    //2. email validation
    function editemailValidation(email){
        this.email = getProfileEmail;
        let regEmail = this.email;
        let returnValue = true;
    
        if(regEmail === '' || regEmail.length < 1 || regEmail.length < 6 ){
            returnValue = false;
            errorMessage = 'Fill Correct Details';
            console.log(errorMessage);
        }
        
        if(regEmail.length > 30){
            errorMessage ='Email is too long';
            console.log(errorMessage);
        }
        
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(regEmail) === false){
            errorMessage = 'not a valid email';
            console.log(errorMessage);
        }
        // console.log(regEmail);
        return returnValue;
    
    }
    
    // mobile validation
    function editmobileValidation(mobile){
        this.mobile = getProfileMobile;
        let regMobile = this.mobile;
        let returnValue = true;
        
        if(regMobile.toString().length === '' || regMobile.toString().length < 1 || regMobile.toString().length > 10 ){
            returnValue = false;
            errorMessage = 'Enter 10 Digit Mobile Number';
            console.log(errorMessage);
        }
      
        if (isNaN(regMobile) === true){ 
            errorMessage = 'Enter a Valid Number';
            console.log(errorMessage);
        }
         //console.log(regMobile);
        return returnValue;
    }

    /* console.log(nameValidation(getProfileName));
    console.log(emailValidation(getProfileEmail));
    console.log(mobileValidation(getProfileMobile)); */

return true;
}

// editProfile();
// ==================================================== User Profile Edit Ends Here =====================================================


// ====================================================  Change Password Starts Here =====================================================
// user change password
function changePassword(){
    let oldPassword = 'Pass_is_strong@1';
    let getnewPassword = 'MuskaanSharma162';
    let getconfirmPassword = 'Muskaan_@123';

    // change password validation
    function changepasswordValidation(password) {
        this.password = getnewPassword;
        let regPassword = this.password;
        let returnValue = true;
    
        if(regPassword.length < 8 || regPassword.length > 16){
            errorMessage = 'Password Must be of 16 Characters only';
            console.log(errorMessage);
            returnValue = true;
        }
        else if(!regPassword.match(/[A-Za-z0-9*_$@]/g)){
            errorMessage ='Password Must Be Of 16 Characters and have atleast 1 Capital Letter, 1 Small Letter, 1 Number, 1 Symbol';
            console.log(errorMessage);
            return returnValue = false;
        }
        //console.log(regPassword.match(/[A-Za-z0-9*-_$@]/));
        return returnValue;
    }
    
    changepasswordValidation();

    if(oldPassword === localStorageDetails.password){
        let newPassword = getnewPassword;
        let confirmPassword = getconfirmPassword;

        if(newPassword !== confirmPassword){
            console.log('Confirm Password Should Match with New Password');
        }else if(newPassword === confirmPassword){
            if(oldPassword === newPassword){
                console.log('Old Password Cannot Be Used Again. Try Another Password');
            }
        }
        else{
            localStorageDetails.password = newPassword
        }
    }

    return true;
}

// changePassword();

// ==================================================== Change Password Ends Here =====================================================



//Dashboard
// ==================================================== Add Task Starts Here =====================================================
// add task
function addTask(){
    createChk();
}
var i = 1;      // Just a counter.
function createChk(obj) {
    if (obj.value !== '') {
      
      // Create checkbox (its a input box of type checkbox).
      var chk = document.createElement('input');  
      
      // Specify the type of element.
      chk.setAttribute('type', 'checkbox');
      chk.setAttribute('id', 'prodName' + i);  // Set an ID.
      chk.setAttribute('value', obj.value);
      chk.setAttribute('name', 'products');

      // Create label for checkbox.
      var lbl = document.createElement('label');  
      lbl.setAttribute('for', 'prodName' + i);

      // Create text node and append it to the label.
      lbl.appendChild(document.createTextNode(obj.value));

      // Append the newly created checkbox and label to the <p>.
      container.appendChild(chk);
      container.appendChild(lbl);

      obj.value = '';
      document.getElementById(obj.id).focus();

      i = i + 1;
    }
}

console.log(values);
// ==================================================== Add Task Ends Here =====================================================
// mark/unmark task
// update task
// delete task
// completed or pending task


// third-party product
// weather of current location
// random GIF every 2 min
// current time with seconds
