import { Component} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { CoreService } from '../core/core.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adding-users',
  templateUrl: './adding-users.component.html',
  styleUrls: ['./adding-users.component.css'],
})
export class AddingUsersComponent {
  addForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _userService: UsersService,
    private _coreService: CoreService,
    private _router: Router
  ) {
    this.addForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
    });
  }

  onFormSubmit() {
    if (this.addForm.valid) {
      this._userService.addUser(this.addForm.value).subscribe({
        next: (val: any) => {
          this._coreService.openSnackBar('User added successfully', '✅');
          this._router.navigate(['/']);
        },
        error: (e: any) => {
          console.log(e);
        },
      });
    }
  }
}
