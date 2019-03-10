import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { GameGeneratorService } from 'src/app/services/game-generator.service';

@Component({
  selector: 'funnow-select-level',
  templateUrl: './funnow-select-level.component.html',
  styleUrls: ['./funnow-select-level.component.scss']
})
export class FunnowSelectLevelComponent implements OnInit {
  @Output() exitLevel: EventEmitter<any> = new EventEmitter<any>();



  constructor(
    public ggs: GameGeneratorService
  ) { }

  ngOnInit() {
  }

  clickLevel( event ) {
    switch (event) {
      case 'BEGINNER':
        break;
      case 'NORMAL':
        // code block
        break;
      case 'DIFICULT':
        // code block
        break;
      case 'EXPERT':
        // code block
        break;
      default:

      }

      // obtener nivel

      // checkear si es how to play

      // salir level

      this.exitLevel.emit('SUCCESS');
  }

  clickBack(event) {
    this.exitLevel.emit('BACK');
  }
}
