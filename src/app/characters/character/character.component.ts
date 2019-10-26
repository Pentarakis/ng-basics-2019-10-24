import { Component, OnInit } from '@angular/core';
import { Character } from '../model/character';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../character.service';
import { filter, pluck, switchMap } from 'rxjs/operators';

@Component({
  selector: 'ngb-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  character: Character = new Character();

  isCreateMode = true;

  constructor(private route: ActivatedRoute, private characterService: CharacterService) {

    this.route.params
      .pipe(
        pluck('id'),
        filter(id => id !== 'create'),
        switchMap(id => this.characterService.read(id))
      )
      .subscribe(character => {
        if (character) {
          this.character = character;
        } else {
          alert('Character not found!');
        }
      });
  }

  ngOnInit() {
  }

}
