import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from '../services/users.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { CoreService } from '../core/core.service';
import { Router } from '@angular/router';
import { AddingUsersComponent } from '../adding-users/adding-users.component';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _userService: UsersService,
    private _coreService: CoreService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  openEditUserForm(data: any) {
    const dialogRef = this._dialog.open(EditUserComponent, {
      data: data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getUsers();
        }
      },
    });
  }

  getUsers() {
    this._userService.getUsers().subscribe({
      next: (res: any) => {
        // console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (e: any) => {
        console.log(e);
      },
    });
  }

  searchById(event: KeyboardEvent) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = (data, filter) => {
      return data.id.toString().toLowerCase().includes(filter);
    };
    this.dataSource.filter = inputValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteUser(id: string) {
    this._userService.deleteUser(id).subscribe({
      next: (res: any) => {
        this._coreService.openSnackBar('User deleted successfully', '✅');
        this.getUsers();
      },
      error: (e: any) => {
        console.log(e);
      },
    });
  }

}
