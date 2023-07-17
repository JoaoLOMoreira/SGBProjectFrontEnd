import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { baixaPresenter } from '../providers/baixa.presenter';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-baixa-list',
  templateUrl: './baixa-list.component.html',
  styleUrls: ['./baixa-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaixaListComponent implements OnInit, OnDestroy {

  baixalist$ = this.presenter.baixalist$

 // displayedColumns = ['idBovino', 'apelido', 'motivo', 'dataBaixa', 'idUsuario']; //ver questão do id
  displayedColumns = ['apelido', 'motivo', 'dataBaixa', 'idUsuario']; // ver questão do usuario

  private unsubscribe: Subject<void> = new Subject();

  constructor(
    private presenter: baixaPresenter
  ) {}

  ngOnInit(): void {
    this.presenter.getAll();
  }

  ngOnDestroy(): void {
    this.presenter.destroy();
  }

}
