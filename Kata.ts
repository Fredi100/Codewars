export class Kata {
    static spinWords(words: string) {
        let result: string[] = [];
        words.split(" ").forEach((word, index) => {
            if (word.length >= 5) {
                result[index] = word.split("").reverse().join();
            } else {
                result[index] = word;
            }
        });
        let text: string
        result.forEach((word, index) => {
            if (index == 0) {
                text = word;
            } else {
                text += " " + word;
            }
        });
        return text;
    }
}
