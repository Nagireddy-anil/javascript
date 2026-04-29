function add(){
    var x=10;
    if(true){
        let x=15;
    }
    console.log("x-----",x);
}
if(true){
    var num=15;
    console.log("block---",num);
}
add();
var num=2;
function parent(){
    var property =100;
    function child(){
        console.log("child---",property);
        var adddproperty=20;
        function subchild(){
            console.log("subchild---",property);
            var doubleproperty=30;

        }
        subchild()
    }
    child()

}
parent()
