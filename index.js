let froyoPrompt = prompt(
    "Please enter your ice cream flavors, seperated by commas."
  );
  let  froyoFlavors = froyoPrompt.split(",");
  const objFroyo={} 
  const countFroyo= () => {
   for (let i=0; i<froyoFlavors.length; i++){
    let flavor= froyoFlavors[i].trim();
    if (objFroyo[flavor]){
        objFroyo[flavor]++;
    } 
    else objFroyo[flavor]=1;
}
  };
countFroyo();
    console.log(objFroyo)