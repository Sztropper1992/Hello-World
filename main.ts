import{Inspiration} from "./point"

let log=(m)=>{
    console.log(m);
}
var message="You are going to be ok Shlo!! Esti loves you so much no matter what!!!!!!!!!!!!!";

log(message);

let inspire= new Inspiration("Shlo is a wonderful person ", "irrespective of how good he is at webdev!!!" );
inspire.message();