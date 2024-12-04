import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-view',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './chat-view.component.html',
  styleUrl: './chat-view.component.scss'
})
export class ChatViewComponent {
  @Input() CurrentUserName:string='';
  @Input() ChatData:any[]=[];
}
