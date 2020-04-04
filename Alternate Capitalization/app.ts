export function capitalize(s: string) {
    let list: string[] = ['', ''];
    s.split("").forEach((c, index) => {
        list[index % 2] += c.toUpperCase();
        list[(index + 1) % 2] += c.toLowerCase();
    });
    return list;
}