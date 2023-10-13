import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCwitComponent } from './user-cwit.component';

describe('UserCwitComponent', () => {
  let component: UserCwitComponent;
  let fixture: ComponentFixture<UserCwitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UserCwitComponent]
    });
    fixture = TestBed.createComponent(UserCwitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
