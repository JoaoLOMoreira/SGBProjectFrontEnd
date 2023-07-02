import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import ptBr from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DashboardComponent } from './core/layouts/dashboard/dashboard.component';
import { BovinoService } from './modules/bovino/providers/bovino.service';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    loadChildren: () =>
      import('./modules/bovino/bovino.module').then((m) => m.BovinoModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
];

registerLocaleData(ptBr);

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  providers: [BovinoService, { provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
