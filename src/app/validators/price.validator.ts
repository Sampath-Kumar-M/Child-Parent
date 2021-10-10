import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function PriceValidator(minRange: number, maxRange: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

        const value = control.value;

        if (value < minRange) {
            return { 'minprice': { 'reqpriceval': minRange } }
        }
        if (value > maxRange) {
            return { 'maxprice': { 'reqpriceval': maxRange } }
        }
 
        return null;

    }
}