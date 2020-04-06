// complete the function
function solution(string) {
    return string.split('').map((c)=>{return c === c.toUpperCase() ? ' '+c : c}).join('');
}