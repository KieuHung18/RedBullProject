function accentsCheck(stringToCheck){
	var accentArray = "ẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ".split("");
  for(var i=0; i < stringToCheck.length; i++){
      for(var j=0; j < accentArray.length; j++){
          if(stringToCheck[i].toUpperCase() === accentArray[j]){
              return true
          }
      }
  }return false
}
export function textValiDate(text){
		if(accentsCheck(text)){return false}
		if(text[0]==" "){return false}
    if(text==""){return false}
    var regexp = /[`!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;
    return !regexp.test(text)
}