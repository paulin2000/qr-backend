import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: '' , unique:true})
  username: string

  @Column({ default: '' })
  password: string


  @Column({ default: '' })
  firstName: string;
  
  @Column({ default: '' })
  adress: string;

  @Column({ default: '' })
  lastName: string;

  @Column({ default: '' })
  firstContact: string;

  @Column({ default: '' })
  firstContactName: string;

  @Column({ default: '' })
  secondContact: string;
  
  @Column({ default: '' })
  secondContactName: string;

  @Column({ default: '' })
  allergies: string;

  @Column({ default: '' })
  antecedent: string;

  @Column({ default: '' })
  picture: string;

  @Column({ default: '' })
  birthday: string

  @CreateDateColumn({ update: false })
  createdAt: Date;


}
