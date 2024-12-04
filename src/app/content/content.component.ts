import { Component } from '@angular/core';
import { TimelineComponent } from "../timeline/timeline.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [TimelineComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  Data:any[]=[
    {CreatedBy:'Hyder',CreatedDatetime:'12/04/2024 , 09:30 AM',Comments:'Fix Issue I Assigned You On WorkItem',CreatedSource:'Internal',Type:'Assignment',AssignedTo:'Junaid'},
    {CreatedBy:'Junaid',CreatedDatetime:'12/04/2024 , 10:00 AM',Comments:'I Issued Functionality Issue , Design Will Fixed By Ishan Bhai',CreatedSource:'External',Type:'StatusChange',Status:'InProgress'},
    {CreatedBy:'Hyder',CreatedDatetime:'12/04/2024 , 10:30 AM',Comments:'Ishan Try To Completed',CreatedSource:'Internal',Type:'Assignment',AssignedTo:'Ishan'},
    {CreatedBy:'Ishan',CreatedDatetime:'12/04/2024 , 11:00 AM',Comments:'Changes Completed Gave PR',CreatedSource:'External',Type:'StatusChange',Status:'WaitingforApproval'},
    {CreatedBy:'Ajeesh',CreatedDatetime:'12/04/2024 , 11:30 AM',Comments:'PR Accepted And Deployed , Afrith Test The Changes',CreatedSource:'External',Type:'StatusChange',Status:'Approved'},
    {CreatedBy:'Afrith',CreatedDatetime:'12/04/2024 , 12:00 PM',Comments:'Tested All Working Fine',CreatedSource:'External',Type:'Comment'},
  ]
}
