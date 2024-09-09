import { Component, OnInit } from '@angular/core';
import { TransacaoService } from '../../services/transacao.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-transacao-form',
  templateUrl: './transacao-form.component.html',
})
export class TransacaoFormComponent implements OnInit {
  transacao: any = { descricao: '', valor: 0, tipo_transacao_id: null };
  tiposTransacao: any[] = [];
  isEdit = false;

  constructor(
    private transacaoService: TransacaoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.transacaoService.getTransacoes().subscribe((data) => {
        this.transacao = data.find((t: any) => t.id === +id);
      });
    }
    // Carregar tipos de transação
    // (Implementar a chamada ao backend para obter os tipos)
  }

  submitForm() {
    if (this.isEdit) {
      this.transacaoService.updateTransacao(this.transacao.id, this.transacao).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.transacaoService.createTransacao(this.transacao).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
