import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from 'typeorm';
import { Planet } from './Planet';

@Entity()
export class Character extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Planet, planet => planet.characters)
    planet: Planet;

    @Column({ unique: true })
    name: string;

    @Column()
    description: string;

    @Column()
    image_url: string;

    @Column()
    height: number;

    @Column()
    mass: number;

    @Column()
    hair_color: string;

    @Column()
    skin_color: string;

    @Column()
    eye_color: string;

    @Column()
    birth_year: string;

    @Column()
    gender: string;

    @Column()
    created: string;

    @Column()
    edited: string;

    @Column()
    url: string;

}