import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

  @Output() pessoaAdicionada = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  pessoas = [
    { nome: "José", cidade: "", estado: "" },
    { nome: "Maria", cidade: "", estado: ""}
    ];
    adicionar(nome, idade) {
      const pessoa = {
      nome: nome,
      cidade: cidade,
      estado: estado,
      };
      this.pessoaAdicionada.emit(pessoa);
      }

}
