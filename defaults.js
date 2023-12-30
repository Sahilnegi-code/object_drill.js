const defaults = (obj, defaultProps)=>{
    if(typeof(obj) != 'object' || typeof(defaultProps) != 'object'){
        console.log('Not an Object');
        return;
    }
    for( let key in defaultProps){
        if( obj.hasOwnProperty(key) === false ){
            obj[key] = defaultProps[key];
        }
    }
    return obj; 
}
module.exports = defaults ;