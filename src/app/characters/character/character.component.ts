import { Component, OnInit } from '@angular/core';
import { Character } from '../model/character';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../character.service';

@Component({
  selector: 'ngb-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  character: Character = new Character();

  constructor(private route: ActivatedRoute, private characterService: CharacterService) {
    const id: number = Number(this.route.snapshot.params.id);

    const character = this.characterService.read(id);

    if (character) {
      this.character = character;
    } else {
      alert('Character not found!');
    }
  }

  ngOnInit() {
  }

}
