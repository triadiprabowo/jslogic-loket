import { ValidatorFn, AbstractControl } from '@angular/forms';

export function EmailValidator(): ValidatorFn {
	return (control: AbstractControl): { [key:string]:any } => {
		const pattern:any = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if(control.value && !pattern.test(control.value)) {
			return {'emailValidator': { value: control.value }};
		}

		return null;
	}
}