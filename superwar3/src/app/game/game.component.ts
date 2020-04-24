import { Component, OnInit } from '@angular/core';
import { gameInterface } from '../../gameInterface';
import { playerInfo } from '../../InterfaceImp';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  player: gameInterface[];
  playerInfo: any = {};

  constructor() {}

  ngOnInit(): void {
    this.playerInfo = playerInfo;
  }
}
