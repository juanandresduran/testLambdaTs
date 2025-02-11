import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity({ name: 'PING' })
export class Ping extends BaseEntity {
    @PrimaryGeneratedColumn({ name: 'ID' })
    id: number;

    @Column({ name: 'UUID', type: 'varchar' }) // Tipo explícito
    uuid: string;

    @Column({ name: 'CREATION_DATE', type: 'datetime' })
    creationDate: Date;
}
