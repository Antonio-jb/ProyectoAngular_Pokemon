import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepasoComponent } from './repaso.component';

describe('RepasoComponent', () => {
  let component: RepasoComponent;
  let fixture: ComponentFixture<RepasoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepasoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
