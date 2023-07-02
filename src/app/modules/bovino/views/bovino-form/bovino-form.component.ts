import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject, filter, takeUntil, tap } from 'rxjs';
import { racas } from 'src/app/core/constants/racas';
import { BovinoPresenter } from '../../providers/bovino.presenter';
import { Bovino } from '../../store/bovino.entity';
import { ActivatedRoute } from '@angular/router';
import { BovinoState } from '../../store/bovino.state';
import { Select } from '@ngxs/store';
import { DatePipe } from '@angular/common';

@Component({
  templateUrl: './bovino-form.component.html',
  styleUrls: ['./bovino-form.component.scss'],
})
export class BovinoFormComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  @Select(BovinoState.selectedBovino)
  selected$!: Observable<Bovino>

  bovinoForm = this.formBuilder.group({
    id: [{value: '', disabled: true}],
    apelido: [''],
    sexo: [''],
    raca: [''],
    obeservacao: [''],
    pasto: [''],//pasto: ['', Validators.required],
    idMaterno: [''],
    idPaterno: [''],
    mesNascimento:[0],
    anoNascimento: [0],
    genitora: [false],
    qtdCria: [0],
    ultimaCria: [new Date()],
    // ver com o vitin ultimaCria: Date;
  });

  racas = racas.sort().map(raca => raca.toLowerCase());
  editMode = false;

  
  

  constructor(
    private formBuilder: FormBuilder,
    private presenter: BovinoPresenter,
    private route: ActivatedRoute,
    ) {}


  
    ngOnInit(): void {
      const editar = this.route.snapshot.data[0];
      if (editar) { 
        this.editMode = true;
        this.selected$
          .pipe(
            takeUntil(this.unsubscribe$),
            tap(res => {
              if(res) {
                this.bovinoForm.setValue({
                  ...res,
                  id: res.id as string,
                });
              }
            })
          )
          .subscribe()
      } 
    }

    ngOnDestroy(): void {
        
    }

  submit(){
    if (this.editMode){
      console.log('Update')
      this.presenter.Update(this.bovinoForm.getRawValue() as Bovino);
    }else{
      console.log('Create')
      this.presenter.create(this.bovinoForm.getRawValue() as Bovino);
    }
    
  }

   goBack(){
    this.presenter.goToList();
  }



}