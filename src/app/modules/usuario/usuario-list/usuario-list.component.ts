import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { UsuarioPresenter } from '../providers/usuario.presenter';
import { Subject } from 'rxjs';
import { UsuarioList } from '@shared/entities/usuario.entity';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsuarioListComponent implements OnInit, OnDestroy {
  usuariolist$ = this.presenter.usuariolist$;
  today = new Date();

  displayedColumns = ['nome', 'nomeUsuario', 'email', 'actions'];

  private unsubscribe: Subject<void> = new Subject();

  constructor(
    private presenter: UsuarioPresenter,
  ) {}

  ngOnInit(): void {
    this.presenter.getAll();
  }

  ngOnDestroy(): void {
    this.presenter.destroy();
  }

  openFormAdd() {
    this.presenter.navigateToAdd();
  }

  openFormEdit(usuario: UsuarioList){
    this.presenter.navigateToUpdate(usuario.id as string)
  }

}
