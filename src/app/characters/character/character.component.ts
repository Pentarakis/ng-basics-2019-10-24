import { Component, OnDestroy, OnInit } from '@angular/core';
import { Character } from '../model/character';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../character.service';
import { filter, pluck, switchMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'ngb-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit, OnDestroy {

  character: Character = new Character();
  isCreateMode = true;
  destroy: Subject<boolean> = new Subject<boolean>();

  constructor(private route: ActivatedRoute, private characterService: CharacterService) {

    this.route.params
      .pipe(
        pluck('id'),
        filter(id => id !== 'create'),
        switchMap(id => this.characterService.read(id)),
        takeUntil(this.destroy)
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

  ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.complete();
  }

}
