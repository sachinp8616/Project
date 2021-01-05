import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertiesComponent } from './adverties.component';

describe('AdvertiesComponent', () => {
  let component: AdvertiesComponent;
  let fixture: ComponentFixture<AdvertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
