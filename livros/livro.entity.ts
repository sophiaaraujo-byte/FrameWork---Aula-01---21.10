import {
    Entity,
    PrimaryGeneratedColumn,
    Column

} from 'typeorm';
@Entity('livros')
export class Livro {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar',length: 150 })
    titulo!: string;

    @Column({ type: 'varchar',length: 100 })
    autor!: string;

    @Column({ type: 'varchar',length: 13, unique: true })
    isbn!: string;

    @Column({ type: 'int' })
    anoPublicacao!: number;

    @Column({ default: true })
    disponivel!: boolean;
}