export class G964 {
    public static sumFracts(l: number[][]): string {
        if(!Array.isArray(l)) return; // list is empty

        let result_frac: number[] = [0,1];
        l.forEach((frac)=>{
            if(frac.length < 1) return;
            result_frac = G964.addFracts(result_frac, frac);
        });

        result_frac = G964.reduceFrac(result_frac);
        if(result_frac[0] / result_frac[1] == 0) return;
        return result_frac[0] % result_frac[1] == 0 ? `${result_frac[0] / result_frac[1]}` : `[${result_frac[0]}, ${result_frac[1]}]`;;
    }

    private static addFracts(frac1: number[], frac2: number[]): number[] {
        let new_frac: number[] = [];
        new_frac[0] = frac1[0] * frac2[1] + frac1[1] * frac2[0];
        new_frac[1] = frac1[1] * frac2[1]; //denominator
        return new_frac;
    }

    private static reduceFrac(frac: number[]): number[]{
        let denom: number = G964.gcd(frac[0], frac[1]);
        return [frac[0]/denom,frac[1]/denom];
    }

    private static gcd(num1: number, num2: number){
        return num2 === 0 ? num1 : G964.gcd(num2, num1 % num2);
    }
}