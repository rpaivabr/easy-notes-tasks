import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatCardModule } from '@angular/material/card'
import { BrowserModule } from '@angular/platform-browser'
import { RouterTestingModule } from '@angular/router/testing'
import { CoreModule } from 'src/app/core/core.module'
import { NotesModule } from 'src/app/features/notes/notes.module'

import { TasksListComponent } from './tasks-list.component'

describe('TasksListComponent', () => {
  let component: TasksListComponent
  let fixture: ComponentFixture<TasksListComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, CoreModule, BrowserModule, NotesModule, MatCardModule],
      declarations: [TasksListComponent]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
