const userkey={
    user:{
        profile:{
            name:'anil',
            age:21,
            height:5.7
        }
    },
    user1: {
        city: "Hyderabad"
    },
    user2: {
        city: "Delhi"
    },
    user3: {
        city: "Chennai"
    }
   
}
//  console.log(Object.keys(userkey));
//  console.log(Object.keys(userkey.user.profile));
 for (let key in userkey){
    if(userkey[key].city){
    console.log(userkey[key].city);
 }
}
 /*if(userkey.user){
    console.log("1st block");
 }*/
 /* a fun itself is called recursive fun*/
 // fiond key based on value
 // foind value based on key
 // fond duplicate keys