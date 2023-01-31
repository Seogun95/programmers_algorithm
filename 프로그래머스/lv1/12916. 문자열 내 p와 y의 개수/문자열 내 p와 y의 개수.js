function solution(s) {
    console.log(s.toLowerCase().split('p').length); //3
    console.log(s.toLowerCase().split('p')); //[ '', '', 'oooyy' ] 
    console.log(s.toLowerCase().split('y')); //[ 'ppooo', '', '' ]
    console.log(s.toLowerCase().split('y').length); //3
    
    return s.toLowerCase().split('p').length == s.toLowerCase().split('y').length ? true : false;
}