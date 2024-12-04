import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DateTimeAgoPipe } from './dateformat.pipe';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule,FormsModule,DateTimeAgoPipe],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
@Input() CurrentUserName:string='';
@Input() ChatData:any[]=[];
}
