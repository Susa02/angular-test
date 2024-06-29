import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a div with class container and bg-primary', () => {
    const div = fixture.debugElement.query(By.css('div.container.bg-primary'));
    expect(div).toBeTruthy();
  });

  it('should have an h1 with class text-center and text "Hello"', () => {
    const h1 = fixture.debugElement.query(By.css('h1.text-center'));
    expect(h1).toBeTruthy();
    expect(h1.nativeElement.textContent).toBe('Hello');
  });

  it('should have an empty p tag', () => {
    const p = fixture.debugElement.query(By.css('p'));
    expect(p).toBeTruthy();
    expect(p.nativeElement.textContent).toBe('');
  });
});
