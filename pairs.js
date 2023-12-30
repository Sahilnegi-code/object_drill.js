const pairs = (obj)=>{

    let arr = [];
    for (const property in obj) {
        let tempArray = [];
        tempArray.push(property);
        tempArray.push(obj[property]);
        arr.push(tempArray);
      }
      return arr;
}
module.exports = pairs;