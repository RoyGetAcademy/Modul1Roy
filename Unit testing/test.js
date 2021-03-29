function reverseText(text){
    if(!text) return text;
    text=text.replace(/\s+/g, '');
    return text.charAt(0).toUpperCase()+text.slice(1)
}
function validateEmail(email)
{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    email=email.replace(/\s+/g, '');
    return re.test(String(email).toLowerCase());
}
function validateEmail2(email)
{
    var test2 = /(\..*)(\@){1,}/;
    return test2.test(email);
}
