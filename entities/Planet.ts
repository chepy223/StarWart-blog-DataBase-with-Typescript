import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from 'typeorm';
import { Character } from './Character';

@Entity()
export class Planet extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Character, character => character.planet)
    characters: Character[];

    @Column({ unique: true })
    name: string;

    @Column()
    description: string;

    @Column()
    image_url: string;

    @Column()
    diameter: number;

    @Column()
    rotation_period: number;

    @Column()
    orbital_period: number;

    @Column()
    gravity: string;

    @Column()
    population: number;

    @Column()
    climate: string;

    @Column()
    terrain: string;

    @Column()
    surface_water: number;

    @Column()
    created: string;

    @Column()
    edited: string;

    @Column()
    url: string;

}