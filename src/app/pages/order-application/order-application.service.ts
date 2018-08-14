import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialog } from './shared/dialogs/success-dialog.component';
import { Router } from '@angular/router';

import * as cookies from 'js-cookie';

// import validators
import { EmailValidator } from '../../shared/validators/email.validator';
import { NumericalValidator } from '../../shared/validators/numerical.validator';

export interface DataModel {
	form: FormGroup,
	actionBusy: boolean,
	errors: any
}

@Injectable()
export class OrderApplicationService {
	public $data:Observable<DataModel>;
	private $subject:BehaviorSubject<DataModel>;
	private store:DataModel;

	private validationMessages:any = {
		name: {
			required: 'Name is required',
			minlength: 'Name is minimum 5 characters long'
		},
		email: {
			required: 'Email is required',
			emailValidator: 'Email format is invalid'
		},
		phoneNumber: {
			required: 'Phone is required',
			numerical: 'Phone is numerical only allowed'
		},
		address: {
			maxlength: 'Address is maximum 130 characters long'
		}
	}

	constructor(private fb:FormBuilder, private dialog:MatDialog, private router:Router) {
		this.store = {
			form: null,
			actionBusy: false,
			errors: {
				name: '',
				phoneNumber: '',
				address: '',
				email: '',
				subscribed: ''
			}
		}

		this.$subject = <BehaviorSubject<DataModel>>new BehaviorSubject({});
		this.$data = this.$subject.asObservable();

		// init store value
		this.$subject.next(this.store);
	}

	public dispatch(obj:any): DataModel {
		const newValue:DataModel = (<any>Object).assign(this.store, obj);
		this.$subject.next(newValue);

		return newValue;
	}

	public buildForm(): void {
		cookies.remove('__fd');
		
		let group:any = {
			name: ['', [Validators.required, Validators.minLength(5)]],
			email: ['', [Validators.required, EmailValidator()]],
			phoneNumber: ['', [Validators.required, NumericalValidator()]],
			address: ['', [Validators.maxLength(130)]],
			subscribed: [true],
			phoneCountry: ['+62']
		}

		this.dispatch({ form: this.fb.group(group) });

		this.store.form.valueChanges.subscribe(values => this.onChangedValues(values));
	}

	private onChangedValues(val:any): void {
		if(!this.store.form) { return; }
		const form = this.store.form;
		const errors = this.store.errors;

		for(const field in this.store.errors) {
			const control = form.get(field);
			this.store.errors[field] = '';

			this.dispatch({ errors: this.store.errors });

			if(control && control.dirty && !control.valid) {
				for(const key in control.errors) {
					errors[field] = this.validationMessages[field][key] + ' ';
					this.dispatch({ errors: errors });
				}
			}
			else if(control && control.invalid && control.value) {
				for(const key in control.errors) {
					errors[field] = this.validationMessages[field][key] + ' ';
					this.dispatch({ errors: errors });
				}
			}
		}
	}

	public setValidityInputClass(name:string) {
		if((this.store.form.controls[name].value  && this.store.form.controls[name].invalid) || 
			(this.store.form.controls[name].dirty && this.store.form.controls[name].invalid)) {
			return 'is-invalid';
		}

		if(this.store.form.controls[name].value && this.store.form.controls[name].valid) {
			return 'is-valid';
		}
	}

	public submitForm(form:any): void {
		const data = (<any>Object).assign({}, this.store.form.value);

		if(data.phoneNumber) {
			data.phoneNumber = `${data.phoneCountry}${data.phoneNumber}`;
		}

		// set form data cookies
		cookies.set('__fd', data);

		let dialogRef = this.dialog.open(SuccessDialog);

		dialogRef.afterClosed().subscribe(d => {
			this.router.navigateByUrl('/thank-you');
		});
	}
}