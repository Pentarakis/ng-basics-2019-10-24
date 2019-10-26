import { Injectable } from '@angular/core';
import { Character } from './model/character';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private readonly baseUrl = 'http://localhost:3000/characters';

  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<Character[]> {
    return this.httpClient.get<Character[]>(`${this.baseUrl}?_start=20&_end=120`);
  }

  read(id: number): Observable<Character> {
    return this.httpClient.get<Character>(`${this.baseUrl}/${id}`);
  }

  create(character: Character): Observable<Character> {
    return this.httpClient.post<Character>(`${this.baseUrl}`, character);
  }

  update(character: Character): Observable<Character> {
    return this.httpClient.put<Character>(`${this.baseUrl}/${character.id}`, character);
  }
}
