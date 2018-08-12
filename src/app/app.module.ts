import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		RouterModule.forRoot([
			{ path: '', redirectTo: 'order-application-form', pathMatch: 'full' },
			{ path: 'order-application-form', loadChildren: './pages/order-application/order-application.module#OrderApplicationModule' },
			{ path: 'thank-you', loadChildren: './pages/thank-you/thank-you.module#ThankYouModule' }
		])
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
