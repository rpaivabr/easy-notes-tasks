import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterTestingModule } from '@angular/router/testing'
import { CoreModule } from 'src/app/core/core.module'
import { TasksService } from 'src/app/core/services/tasks.service'
import { SharedModule } from 'src/app/shared/shared.module'
import { TasksModule } from '../../tasks.module'

import { DialogTasksComponent } from './dialog-tasks.component'

describe('DialogTasksComponent', () => {
  let component: DialogTasksComponent
  let fixture: ComponentFixture<DialogTasksComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule, CoreModule, BrowserAnimationsModule],
      providers: [TasksService, 
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTasksComponent)
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
