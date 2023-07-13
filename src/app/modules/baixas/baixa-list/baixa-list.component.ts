import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baixa-list',
  templateUrl: './baixa-list.component.html',
  styleUrls: ['./baixa-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaixaListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
