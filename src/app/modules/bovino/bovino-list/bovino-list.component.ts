import { Component, Injectable, Input, OnDestroy, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { BovinoBaixaModalComponent } from '../bovino-baixa-modal/bovino-baixa-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { BovinoList } from '@shared/entities';
import { BovinoPresenter } from '../providers/bovino.presenter';
import { BovinoState } from '../store/bovino.state';

@Component({
  templateUrl: './bovino-list.component.html',
  styleUrls: ['./bovino-list.component.scss'],
})
export class BovinoListComponent implements OnInit, OnDestroy {
  bovinolist$ = this.presenter.bovinolist$;
  today = new Date();

  displayedColumns = ['apelido', 'sexo', 'raca', 'pasto', 'actions'];

  private unsubscribe: Subject<void> = new Subject();

  constructor(
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
    this.presenter.navigateToAdd();
  }

  openFormEdit(bovino: BovinoList){
    this.presenter.navigateToUpdate(bovino.id as string)
  }

  openDialogBaixas(bovino: BovinoList){
    const dialogRef = this.dialog.open(BovinoBaixaModalComponent, {
      data: { id: bovino.id }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.presenter.getAll();
    });
  }
}
