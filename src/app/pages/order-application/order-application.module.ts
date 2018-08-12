import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { OrderApplicationComponent } from './order-application.component';
import { OrderApplicationService } from './order-application.service';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MatDialogModule,
		RouterModule.forChild([
			{ path: '', component: OrderApplicationComponent }
		])
	],
	declarations: [OrderApplicationComponent],
	providers: [OrderApplicationService]
})
export class OrderApplicationModule { }