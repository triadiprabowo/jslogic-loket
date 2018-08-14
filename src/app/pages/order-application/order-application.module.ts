import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { OrderApplicationComponent } from './order-application.component';
import { OrderApplicationService } from './order-application.service';
import { SuccessDialog } from './shared/dialogs/success-dialog.component';

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
	declarations: [OrderApplicationComponent, SuccessDialog],
	entryComponents: [SuccessDialog],
	providers: [OrderApplicationService]
})
export class OrderApplicationModule { }