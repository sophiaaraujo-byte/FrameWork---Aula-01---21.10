import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm'
@Entity('produto')
export class Produto {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar',length: 100 })
    nome!: string;

    @Column({ type: 'varchar', length: 255 })
    descricao!: string;

    @Column({ type: 'int' })
    preco!: number;

    @Column({ type: 'int', default: 0 })
    quantidade!: number;

    @Column({ default: true })
    ativo!: boolean;
}