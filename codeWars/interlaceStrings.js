//...theArgs put as parameter to account for any number parameters that may be passed in

function combineStrings(...theArgs) {

  //Instantiate empty string, also takes into account potential parameter of empty string
  let arg = '';
  let str = ''

  //Not all strings are same length, this sets length of loop to longest string
  for(let i=0;i<theArgs.length;i++){
    if(theArgs[i].length>arg.length){
    arg = theArgs[i]
    }
  }

  //First loop is to loop through the longest parameter
  for(let j=0;j<arg.length;j++){
    //Second loop goes from one string to the next that was passed in as a parameter
    for(let k=0;k<theArgs.length;k++){
      //The charAt adds the character of the current string during that iteration to str
      str += theArgs[k].charAt(j)
    }
  }
  return str
}
