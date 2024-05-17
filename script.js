let eded = prompt("eded daxil edin:");
let cem =0;
for(let i=0; i<eded.length;i++){
    let reqem= eded.charAt(i);
    cem+=Math.pow(reqem, eded.length);
}
if(Number(eded)==cem){
    alert("Armstrongdur!");

}
else{
    alert("Armstrong deyil!");
}
