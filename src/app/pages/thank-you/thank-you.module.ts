import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ThankYouComponent } from './thank-you.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild([
			{ path: '', component: ThankYouComponent }
		])
	],
	declarations: [ThankYouComponent]
})
export class ThankYouModule { }