import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';
@Entity('evento')
export class Evento {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar',length: 150 })
    nome!: string;

    @Column({ type: 'text' })
    descricao!: string;

    @Column({ type: 'date' })
    dataEvento!: Date;

    @Column({ type: 'varchar',length: 150 })
    local!: string;

    @Column({ type: 'int' })
    capacidade!: number;

    @Column({ default: true })
    ativo!: boolean;

}