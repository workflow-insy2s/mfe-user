import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRuleComponent } from './list-rule.component';

describe('ListRuleComponent', () => {
  let component: ListRuleComponent;
  let fixture: ComponentFixture<ListRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListRuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
