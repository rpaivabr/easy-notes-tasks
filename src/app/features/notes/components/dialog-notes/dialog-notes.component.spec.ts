import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatCardModule } from '@angular/material/card'
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterTestingModule } from '@angular/router/testing'
import { CoreModule } from 'src/app/core/core.module'
import { NotesService } from 'src/app/core/services/notes.service'
import { SharedModule } from 'src/app/shared/shared.module'
import { DialogNotesComponent } from './dialog-notes.component'

describe('DialogNotesComponent', () => {
  let component: DialogNotesComponent
  let fixture: ComponentFixture<DialogNotesComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule, CoreModule, BrowserAnimationsModule, MatCardModule],
      providers: [NotesService, 
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNotesComponent)
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
