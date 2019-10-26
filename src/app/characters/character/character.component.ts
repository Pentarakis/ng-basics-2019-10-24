import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../character.service';
import { filter, pluck, switchMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngb-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit, OnDestroy {

  isCreateMode = true;
  destroy: Subject<boolean> = new Subject<boolean>();

  form: FormGroup;

  constructor(private route: ActivatedRoute, private characterService: CharacterService, private fb: FormBuilder) {

    this.initForm();

    this.route.params
      .pipe(
        pluck('id'),
        filter(id => id !== 'create'),
        switchMap(id => this.characterService.read(id)),
        takeUntil(this.destroy)
      )
      .subscribe(character => {
        if (character) {
          this.form.patchValue(character);
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

  private initForm() {
    this.form = this.fb.group({
      id: null,
      name: [null, Validators.required],
      culture: null
    });
  }

  save() {
    this.characterService.update(this.form.getRawValue())
      .subscribe();
  }
}
