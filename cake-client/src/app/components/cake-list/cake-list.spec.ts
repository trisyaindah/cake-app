import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeList } from './cake-list';

describe('CakeList', () => {
  let component: CakeList;
  let fixture: ComponentFixture<CakeList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CakeList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CakeList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
