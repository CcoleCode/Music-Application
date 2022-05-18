import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMusicComponent } from './add-edit-music.component';

describe('AddEditMusicComponent', () => {
  let component: AddEditMusicComponent;
  let fixture: ComponentFixture<AddEditMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditMusicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
