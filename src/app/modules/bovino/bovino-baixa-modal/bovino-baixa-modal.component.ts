import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';
import { BovinoPresenter } from '../providers/bovino.presenter';
import { Baixa } from '@shared/entities';

@Component({
  selector: 'app-bovino-baixa-modal',
  templateUrl: './bovino-baixa-modal.component.html',
  styleUrls: ['./bovino-baixa-modal.component.scss']
})
export class BovinoBaixaModalComponent implements OnInit {
  @ViewChild('motivoSelect') motivoSelect!: MatSelect;

  selectedValue = new FormControl();

  BaixaForm = this.formBuilder.group({
    id: [''],
    motivo: [0]
  });

  constructor(
    private formBuilder: FormBuilder,
    private presenter: BovinoPresenter,
    private dialogRef: MatDialogRef<BovinoBaixaModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: string }
  ) { }

  ngOnInit(): void {
    this.BaixaForm.patchValue({ id: this.data.id });
  }

  gerarBaixa(){
    this.presenter.delete(this.BaixaForm.getRawValue() as Baixa);
    this.dialogRef.close();
  }

  cancelar(){
    this.dialogRef.close();
  }

  onMotivoSelectChange(): void {
    const selectedValue = this.motivoSelect.value;
    this.BaixaForm.patchValue({ motivo: selectedValue });
  }
}
