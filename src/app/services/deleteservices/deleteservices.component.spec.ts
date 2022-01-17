import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteservicesComponent } from './deleteservices.component';

describe('DeleteservicesComponent', () => {
  let component: DeleteservicesComponent;
  let fixture: ComponentFixture<DeleteservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
