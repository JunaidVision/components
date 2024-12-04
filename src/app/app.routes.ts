import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { ChatContentComponent } from './chat-content/chat-content.component';

export const routes: Routes = [
    {path:'',component:ContentComponent},
    {path:'Timeline',component:ContentComponent},
    {path:'Chat',component:ChatContentComponent},
];
