import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorteioPessoasComponent } from './sorteio-pessoas.component';

describe('SorteioPessoasComponent', () => {
  let component: SorteioPessoasComponent;
  let fixture: ComponentFixture<SorteioPessoasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SorteioPessoasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SorteioPessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
