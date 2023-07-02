import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';
import { BovinoPresenter } from '../../providers/bovino.presenter';
import { Baixa } from '../../store/baixa.entity';

@Component({
  selector: 'app-bovino-baixa-modal',
  templateUrl: './bovino-baixa-modal.component.html',
  styleUrls: ['./bovino-baixa-modal.component.scss']
})
export class BovinoBaixaModalComponent implements OnInit {

@ViewChild('motivoSelect') motivoSelect!: MatSelect;

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
    this.BaixaForm.patchValue({
      id: this.data.id
    });
  }

  gerarBaixa(){
//    console.log(this.BaixaForm.value.id!, this.BaixaForm.value.motivo!);
    this.presenter.Delete(this.BaixaForm.getRawValue() as Baixa);
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
