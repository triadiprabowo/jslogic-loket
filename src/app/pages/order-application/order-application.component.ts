import { Component, OnInit } from '@angular/core';
import { OrderApplicationService } from './order-application.service';

@Component({
	templateUrl: './order-application.component.html',
	styleUrls: ['./order-application.component.styl'],
	selector: 'app-orderapp-component'
})
export class OrderApplicationComponent implements OnInit {
	public $vm:any;

	constructor(public service:OrderApplicationService) {

	}

	public ngOnInit(): void {
		this.service.$data.subscribe(models => {
			this.$vm = models;
		});

		// init form
		this.service.buildForm();
	}
}