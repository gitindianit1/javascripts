
console.log('hhhh');
// debugger;
document.write('hellow loops kese ho!!!!');  // on display 
// window.alert('ddfd');



// LOOPS 
// 1
// 2
// 3
// 4
// 5

// for ( let i=0;i<=5;i++){
//     document.write(i,'<Br>');
// }


// let a = 0;
// while (a <=5){
//     console.log(2*a);
//     a++;
// }

// let b = 5;
// while (b<5){
//     document.write(b);
//     ++b;
// }

// let b = 0;
// do {
//     ++b;
//     console.log(2*b);
    
// }while (b<0);


// 1- 100 
// even or odd 


// for ( let i=0;i<=100;i++){
//     if (i %2==0){
//     document.write("this is even ",i,'<Br>');
//     }
// }

// for ( let i=0;i<=100;i++){
//     if (i %2!=0){
//     document.write("this is odd ",i,'<Br>');
//     }
// }

// for ( let i=0;i<=100;i++){
//     if(i %2==0){
//         document.write("<br> This is Even Number => ",i);
//     }
//     else{
//         console.log(i);
//     }
// }

// let even_sum = 0;
// let odd_sum = 0;
// for ( let i=0;i<=100;i++){
//     if(i %2==0){
//         even_sum += i;
//     }
//     else{
//         odd_sum += i;
//     }
// }

// document.write("<br>this is sum of even number: ", even_sum);
// document.write("<br> this is sum of odd number: ", odd_sum);


// document.write('<br>');
// var n = 100;
// document.write((n * ( n+1))/2);


// Factor 
// 5! (0! => )

// 5! => 5 * 4 * 3 * 2 * 1 
// 5! => 1 * 2 * 3 * 4 * 5

// var a= 5;
// let fact = 1;
// for(let i=0;i<5;i++){
//     fact *= a;
//     a--;
// }


// let fact = 1;
// for(let i=1;i<=5;i++){
//     fact *= i;
// }

let fact = 1;
for(let i=5;i>=1;i--){
    fact *= i;
}

document.write('<br>');
document.write(fact);





