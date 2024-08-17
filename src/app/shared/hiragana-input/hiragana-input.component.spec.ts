import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiraganaInputComponent } from './hiragana-input.component';

describe('HiraganaInputComponent', () => {
  let component: HiraganaInputComponent;
  let fixture: ComponentFixture<HiraganaInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiraganaInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiraganaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
