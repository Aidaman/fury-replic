import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WriteMessageDialogComponent } from '../write-message-dialog/write-message-dialog.component';
import { ISection, Sections, IArdesses } from './messages';

@Component({
  selector: 'app-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.css']
})
export class PrimaryComponent implements OnInit {
  public Sections: ISection[][] = Sections;

  public chosenSection: ISection = Sections[0][0];
  public chosenChat!: IArdesses;
  public data!: IArdesses;
  public Adresse: IArdesses = {
    index: 0,
    checkBoxStatus: false,
    starred: false,
    isIncoming: true,
    image: "",
    fullname: "",
    when: "Now",
    shorterText: "",
    fulltext: "",
    viewValue: '',
  }

  public isMessagesClosed: boolean = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    // this.Sections[1][0].chats = getStared();
    // this.Sections[1][1].chats = getIncoming();
  }

  //Open Dialog and creat a message
  public composeMessage(): void{
    const dialogRef = this.dialog.open(WriteMessageDialogComponent, {
      width: '1000px',
      data: this.Adresse,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(this.data, this.Adresse, result);
            
    });
  }

  public switchActive(directory: ISection) : void {
    for(let i = 0; i < this.Sections.length; i++){
      for(let j = 0; j < this.Sections[i].length; j++){
        if(this.Sections[i][j].viewValue.includes(' active')){
          this.Sections[i][j].viewValue = this.Sections[i][j].viewValue.substring(0, this.Sections[i][j].viewValue.indexOf(' '));
        }
      }
    }
    directory.viewValue += ' active';
    this.chosenSection = directory;
    this.revealMessages();
  }

  public switchStar(adresse: IArdesses) :void{
    adresse.starred = !adresse.starred
  }

  //Show the content of one exact message
  public showMessage(adresse: IArdesses) :void{
    //@ts-ignore
    for (let chats of this.chosenSection.chats) {
      chats.viewValue = ' display-none'
    }
    // adresse.viewValue = 'fulltext';
    this.chosenChat = adresse;
    this.isMessagesClosed = true;
  }

  //Show messages if they are closed
  public revealMessages() :void{
    if(this.isMessagesClosed){
      this.isMessagesClosed = false;
    }
  }
}
