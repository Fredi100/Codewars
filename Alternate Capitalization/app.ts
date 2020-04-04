export function capitalize(s: string) {
    let list: string[] = ['',''];
    let counter: number = 0;
    s.split("").forEach(c => {
        list[counter%2] += c.toUpperCase();
        list[(counter+1)%2] += c.toLowerCase();
        counter++;
    });
    return list;
}