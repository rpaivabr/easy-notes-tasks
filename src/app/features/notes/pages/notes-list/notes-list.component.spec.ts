import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatCardModule } from '@angular/material/card'
import { RouterTestingModule } from '@angular/router/testing'
import { CoreModule } from 'src/app/core/core.module'
import { NotesService } from 'src/app/core/services/notes.service'
import { HeaderComponent } from 'src/app/shared/layout/components/header/header.component'
import { NotesModule } from '../../notes.module'

import { NotesListComponent } from './notes-list.component'

describe('NotesListComponent', () => {
  let component: NotesListComponent
  let fixture: ComponentFixture<NotesListComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, CoreModule, NotesModule, MatCardModule],
      declarations: [NotesListComponent, HeaderComponent],
      providers: [NotesService]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
