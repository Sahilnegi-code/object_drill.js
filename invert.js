const invert = (obj)=>{
    let tempObj ={};
    for(let key in obj){
        tempObj[obj[key]] = key;
    }
  
    return tempObj;
}
module.exports = invert ;