import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';
@Entity('modalidade')
export class Modalidade {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar',length: 100 })
    nome!: number;

    @Column({ type: 'text' })
    descricao!: string;

    @Column({ type: "int" })
    duracaoMinutos!: number;

    @Column({ type: 'decimal' })
    valorMensal!: number;

    @Column({ default: true })
    ativa!: boolean;

}