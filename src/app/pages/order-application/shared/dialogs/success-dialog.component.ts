import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
	templateUrl: './success-dialog.component.html',
	selector: 'success-dialog'
})
export class SuccessDialog {
	constructor(private dialogRef:MatDialogRef<SuccessDialog>) { }
}