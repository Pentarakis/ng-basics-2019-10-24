import { Injectable } from '@angular/core';
import { Character } from './model/character';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private readonly characters: Character[] = [
    { id: 1, name: 'Daenerys Targaryen', culture: 'Valyrian'},
    { id: 2, name: 'Jon Snow', culture: 'Northmen'}
  ];

  constructor() { }

  readAll(): Character[] {
    return this.characters;
  }

  read(id: number): Observable<Character> {
    return fetch('http://localhost:3000/characters/' + id);
  }
}
