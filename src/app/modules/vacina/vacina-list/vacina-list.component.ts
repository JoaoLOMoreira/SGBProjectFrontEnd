import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Vacina, VacinaService } from '../vacina.service';

@Component({
  selector: 'app-vacina-list',
  templateUrl: './vacina-list.component.html',
  styleUrls: ['./vacina-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VacinaListComponent implements OnInit {

  constructor(private service: VacinaService) { }

  ngOnInit(): void {
    this.service.create({} as Vacina)
  }
}
