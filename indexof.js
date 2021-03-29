function isThisAEmail(maybeAEmail){
    var indexOfAt = maybeAEmail.indexOf("@");
    var firstDotIndex = maybeAEmail.indexOf(".");
    var findSecondDotIndex = maybeAEmail.substring(indexOfAt).indexOf(".");

    if(maybeAEmail.includes("@") && !maybeAEmail.includes(" ")){
        if(firstDotIndex < findSecondDotIndex){
            return true;
        } else return false;
    }else return false;
}