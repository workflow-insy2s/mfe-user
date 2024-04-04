import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditObjetComponent } from './edit-objet.component';

describe('EditObjetComponent', () => {
  let component: EditObjetComponent;
  let fixture: ComponentFixture<EditObjetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditObjetComponent]
    });
    fixture = TestBed.createComponent(EditObjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
