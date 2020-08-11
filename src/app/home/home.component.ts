import { Component, OnInit } from '@angular/core';
import { DialogInfoComponent } from '../dialog-info/dialog-info.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogTeamComponent } from '../dialog-team/dialog-team.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogInfoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogTeam() {
    const dialogRef = this.dialog.open(DialogTeamComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
