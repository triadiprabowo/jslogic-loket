import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import * as cookies from 'js-cookie';

@Component({
	templateUrl: './thank-you.component.html',
	selector: 'app-thankyou-component',
	styleUrls: ['./thank-you.component.styl']
})
export class ThankYouComponent {
	public formData:any;

	constructor(private router:Router, private title:Title) {
		title.setTitle('Thank you for your order!')
	}

	public ngOnInit(): void {
		this.formData = cookies.getJSON('__fd');

		if(!this.formData) {
			this.router.navigateByUrl('/order-application-form')
		}
	}

	public generateInvcode() {
		let result = '';
		let r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
		
		for (let i=0; i < 6; i++) { 
			result += r.charAt(Math.floor(Math.random()*r.length)); 
		}
		return result;
	}
}