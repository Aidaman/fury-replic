import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IArdesses } from '../primary/messages';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-write-message-dialog',
  templateUrl: './write-message-dialog.component.html',
  styleUrls: ['./write-message-dialog.component.css']
})
export class WriteMessageDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<WriteMessageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IArdesses,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  public send(){
    // this.data.shorterText = this.title.nativeElement.value;
    // this.data.fulltext = this.message.nativeElement.value;
    // this.data.image = this.name.nativeElement.value;

    // this.data.shorterText = this.messageTitleInput.nativeElement.value;
    // this.data.image = this.nameSelection.nativeElement.value;
    // this.data.fulltext = this.messageContent.nativeElement.value;
    // console.log(this.data);
    
    this.dialogRef.close();
  }
}
