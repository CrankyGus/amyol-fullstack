import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Works } from './models/works.entity';
import { WorksInterface } from './models/works.interface';

@Injectable()
export class WorksService {
  constructor(
    @InjectRepository(Works)
    private readonly worksRepository: Repository<Works>,
  ) {}

  async getAllWorks(): Promise<Works[]> {
    return this.worksRepository.find();
  }

  async createWorks(works: WorksInterface): Promise<Works> {
    return this.worksRepository.save(works);
  }
}
