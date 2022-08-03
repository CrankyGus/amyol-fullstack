import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Works {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  desc: string;

  @Column()
  titleImages: string;

  @Column('simple-json')
  detailImages: { id: number; images: string };

  @Column()
  isFinished: boolean;
}
