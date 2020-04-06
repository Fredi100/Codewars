function replacement(a){
    a.sort((a,b)=> a-b);
    a[a.length-1] = a[a.length-1] == 1 ? 2 : 1;
    a.sort((a,b)=> a-b);
    return a;
}