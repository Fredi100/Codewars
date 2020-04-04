export const digitalRoot = (n:number):number => {
    while(n > 9){
        let m: number = 0;
        n.toString().split("").forEach(c => {
            m += Number.parseInt(c);
        })
        n = m;
    }
    return n;
};