import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationStart, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  constructor(private router:Router){
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if(this.menuItems.length>0){
          this.menuItems.map(x => {
            if(x.path != '' && event.url.includes(x.path)){
              x.isActive = true;
            }else{
              x.isActive = false;
            }
            return x;
          })
        }

      }
    })
  }
  menuItems:any[]=[
    { path: '/Timeline', title: 'Timeline'},
    { path: '/Chat', title: 'Chat'}
  ]
}
