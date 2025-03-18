import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortadaGameComponent } from './portada-game.component';

describe('PortadaGameComponent', () => {
  let component: PortadaGameComponent;
  let fixture: ComponentFixture<PortadaGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortadaGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortadaGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
