import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController) { }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create(
      {
        header: '2021-2',
        backdropDismiss: false,
        cssClass: 'my-custom-class',
        buttons: [
          {
            text: 'Janeiro',
            role: '',
            icon: '',
            handler: () => {
              console.log('Janeiro clicked');
            }
          },
          {
            text: 'Fevereiro',
            icon: '',
            handler: () => {
              console.log('Fevereiro clicked');
            }
          },
          {
            text: 'Março',
            icon: '',
            handler: () => {
              console.log('Março clicked');
            }
          },
          {
            text: 'Abril',
            icon: '',
            handler: () => {
              console.log('Abril clicked');
            }
          },
          {
            text: 'Maio',
            icon: '',
            role: '',
            cssClass: '',
            handler: () => {
              console.log('Maio clicked');
            }
          },
          {
            text: 'Junho',
            icon: '',
            role: '',
            cssClass: '',
            handler: () => {
              console.log('Junho clicked');
            }
          },
          {
            text: 'Julho',
            icon: '',
            role: '',
            cssClass: '',
            handler: () => {
              console.log('Julho clicked');
            }
          },
          {
            text: 'Agosto',
            icon: '',
            role: '',
            cssClass: '',
            handler: () => {
              console.log('Agosto clicked');
            }
          },
          {
            text: 'Setembro',
            icon: '',
            role: '',
            cssClass: '',
            handler: () => {
              console.log('Setembro clicked');
            }
          },
          {
            text: 'Outubro',
            icon: '',
            role: '',
            cssClass: '',
            handler: () => {
              console.log('Outubro clicked');
            }
          },
          {
            text: 'Novembro',
            icon: '',
            role: '',
            cssClass: '',
            handler: () => {
              console.log('Novembro clicked');
            }
          },
          {
            text: 'Dezembro',
            icon: '',
            role: '',
            cssClass: '',
            handler: () => {
              console.log('Dezembro clicked');
            }
          },
          {
            text: 'Sair',
            icon: 'close',
            role: 'cancel',
            cssClass: '',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          
        ]
      }
    )
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolver with role', role);
  }


  ngOnInit() {
  }

}
