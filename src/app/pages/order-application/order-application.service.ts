import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface DataModel {
	form: FormGroup,
	actionBusy: boolean
}

@Injectable()
export class OrderApplicationService {
	public $data:Observable<DataModel>;
	private $subject:BehaviorSubject<DataModel>;
	private store:DataModel;

	constructor(private fb:FormBuilder) {
		this.store = {
			form: null,
			actionBusy: false
		}
	}

	public dispatch(obj:any): DataModel {
		const newValue:DataModel = (<any>Object).assign(this.store, obj);
		this.$subject.next(newValue);

		return newValue;
	}

	public buildForm(): void {
		
	}
}