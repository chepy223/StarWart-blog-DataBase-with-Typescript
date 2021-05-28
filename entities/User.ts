import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToMany, JoinTable } from 'typeorm';
import { Planet } from './Planet';
import { Character } from './Character';

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    //Planetas favoritos
    @ManyToMany(() => Planet)
    @JoinTable()
    planets: Planet[];

    //Personajes favoritos
    @ManyToMany(() => Character)
    @JoinTable()
    characters: Character[];

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

}