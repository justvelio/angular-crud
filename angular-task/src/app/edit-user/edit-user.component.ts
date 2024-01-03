import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { CoreService } from '../core/core.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{
  editForm: FormGroup;
  userEdit: any;

  constructor(
    private _fb: FormBuilder,
    private _userService: UsersService,
    private _coreService: CoreService,
    private _dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.editForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
    });
  }

  ngOnInit(): void {
    this.editForm.patchValue(this.data)
  }

  onFormUpdate() {
    if (this.editForm.valid) {
      this._userService
      .updateUser(this.data.id, this.editForm.value)
      .subscribe({
        next: (val: any) => {
          this._coreService.openSnackBar('User updated successfully', '✅');
          this._dialogRef.close(true);
        },
        error: (e: any) => {
          console.log(e);
        },
      });
    }
  }
}
