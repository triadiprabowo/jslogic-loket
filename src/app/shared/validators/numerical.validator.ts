import { ValidatorFn, AbstractControl } from '@angular/forms';

export function NumericalValidator(): ValidatorFn {
	return (control: AbstractControl): { [key:string]:any } => {
		const pattern:any = /^\d+$/;

		if(control.value && !pattern.test(control.value)) {
			return {'numerical': { value: control.value }};
		}

		return null;
	}
}