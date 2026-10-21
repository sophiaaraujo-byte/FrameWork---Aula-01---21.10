import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aluno } from './alunos/aluno.entity.js';
import { Livro } from './livros/livro.entity.js';
import { Evento } from './eventos/evento.entity.js';
import { Modalidade } from './modalidades/modalidade.entity.js';
import { Produto } from './produtos/produto.entity.js';
import { Veiculo } from './veiculos/veiculos.entity.js';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '12345678',
    database: 'escola_db_2',
    entities: [Aluno, Livro, Evento, Modalidade, Produto, Veiculo],
    synchronize: true,
    logging: true,
  }),
  ],
})
export class AppModule { }