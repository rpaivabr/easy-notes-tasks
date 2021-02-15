import { Component, Input } from '@angular/core'
import { Color } from 'src/app/shared/enums/color.enum'

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {
  Color = Color;
  @Input() title = ''
  @Input() text = ''
  @Input() color = 'grey'
}
