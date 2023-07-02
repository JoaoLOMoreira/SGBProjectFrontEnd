import { Component, Injectable, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Select } from '@ngxs/store';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { Bovino } from '../../store/bovino.entity';
import { BovinoState } from '../../store/bovino.state';
import { BovinoFormComponent } from '../bovino-form/bovino-form.component';
import { Router } from '@angular/router';
import { BovinoPresenter } from '../../providers/bovino.presenter';
import { BovinoBaixaModalComponent } from '../bovino-baixa-modal/bovino-baixa-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  templateUrl: './bovino-list.component.html',
  styleUrls: ['./bovino-list.component.scss'],
})
export class BovinoListComponent implements OnInit, OnDestroy {
  @Select(BovinoState.bovinoList)
  bovinolist$!: Observable<Bovino[]>;

  //@Input() data: Bovino;

  today: Date = new Date();

  displayedColumns: string[] = ['apelido', 'sexo', 'raca', 'pasto', 'actions'];

  private unsubscribe: Subject<void> = new Subject();


  constructor(
     private store: Store,
     private router: Router,
     private presenter: BovinoPresenter,
     private modalService: ModalService
     ) {}

  ngOnInit(): void {
    this.presenter.getAll();
  }

  ngOnDestroy(): void {
    this.presenter.destroy();
  }

  openFormAdd() {
    this.router.navigate(['bovinos/adicionar']);
  }



  openFormEdit(bovino: Bovino){
    this.router.navigate(['bovinos/editar', bovino.id]);
  }


  openDialogBaixas(bovino: Bovino){
    this.modalService.open(bovino);
  }


}


@Injectable()
export class ModalService {
  constructor(private dialog: MatDialog) {}

  open(bovino: Bovino): void {
    const dialogRef = this.dialog.open(BovinoBaixaModalComponent, {
      data: { id: bovino.id }
    });

    dialogRef.afterClosed().subscribe(() => {
      // Adicione a lógica a ser executada após o fechamento do modal
    });
  }
}