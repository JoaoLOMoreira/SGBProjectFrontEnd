import { Component, Injectable, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Select } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';
import { Bovino } from '../../store/bovino.entity';
import { BovinoState } from '../../store/bovino.state';
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


  today: Date = new Date();

  displayedColumns: string[] = ['apelido', 'sexo', 'raca', 'pasto', 'actions'];

  private unsubscribe: Subject<void> = new Subject();


  constructor(
     private store: Store,
     private router: Router,
     private presenter: BovinoPresenter,
     private dialog: MatDialog
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
    const dialogRef = this.dialog.open(BovinoBaixaModalComponent, {
            data: { id: bovino.id }
          });
      
          dialogRef.afterClosed().subscribe(() => {
            this.presenter.getAll();
          });
        }
  }
