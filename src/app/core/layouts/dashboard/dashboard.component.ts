import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  isHandset$: Observable<boolean> = this._breakpoint
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  get activeUrl(): string {
    return this._router.url;
  }
  
  constructor(
    private _router: Router,
    private _breakpoint: BreakpointObserver
  ) {}

  formName(): string {
    // if (this.activeUrl === '/bovinos') return 'Bovinos';
    // if (this.activeUrl === '/baixas') return 'Baixas';
    // if (this.activeUrl === '/vacinas') return 'vacinas';
    // if (this.activeUrl === '/usuarios') return 'usuarios';
    // if (this.activeUrl === '/configuracoes') return 'configuracoes';
    return '';
  }
}
