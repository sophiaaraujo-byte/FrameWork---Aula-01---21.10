import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';
@Entity('veiculo')
export class Veiculo {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar',length: 50 })
    marca!: string;

    @Column({ type: 'varchar',length: 100 })
    modelo!: string;

    @Column({ type: 'varchar',length: 7, unique: true })
    placa!: string;

    @Column({ type: 'int' })
    ano!: number;

    @Column({ type: 'decimal' })
    valorDecimal!: number;

    @Column({ default: true })
    disponivel!: boolean;
}