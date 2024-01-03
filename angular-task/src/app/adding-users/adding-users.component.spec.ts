import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingUsersComponent } from './adding-users.component';

describe('AddingUsersComponent', () => {
  let component: AddingUsersComponent;
  let fixture: ComponentFixture<AddingUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddingUsersComponent]
    });
    fixture = TestBed.createComponent(AddingUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
