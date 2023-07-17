import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { UsuarioPresenter } from '../providers/usuario.presenter';
import { Subject, takeUntil, tap } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsuarioList } from '@shared/entities/usuario.entity';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsuarioFormComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  selected$ = this.presenter.usuarioselected$;

  usuarioForm = this.formBuilder.group({
    id: [{value: '', disabled: true}],
    nome: [''],
    nomeUsuario: [''],
    senha: [''],
    email: [''], // colocar validator de email
  });

  editMode = false;


  constructor(
    private presenter: UsuarioPresenter,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const editar = this.route.snapshot.data[0];
    if (editar) { 
      this.editMode = true;
      this.selected$
        .pipe(
          takeUntil(this.unsubscribe$),
          tap(res => {
            if(res) {
              this.usuarioForm.setValue({
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
      this.presenter.update(this.usuarioForm.getRawValue() as UsuarioList);
    }else{
      this.presenter.create(this.usuarioForm.getRawValue() as UsuarioList);
    }
    
  }

   goBack(){
    this.presenter.navigateToList();
  }


}
