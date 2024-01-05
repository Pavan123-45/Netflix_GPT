export const checkValidate=(email,password,fullName)=>{
    const isEmailValid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    // const isFullNameValid=/(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(fullName)
    if(!isEmailValid) return "Email id is  not valid";
    if(!isPasswordValid) return "Password id is  not valid"
    // if(!isFullNameValid) return "FullName is  not valid"
    return null

}