import { Body, Controller, Get, Post } from '@nestjs/common';
import { Works } from './models/works.entity';
import { WorksInterface } from './models/works.interface';
import { WorksService } from './works.service';

@Controller('works')
export class WorksController {
  constructor(private worksService: WorksService) {}

  @Get()
  async getAll() {
    return this.worksService.getAllWorks();
  }

  @Post()
  async createDataWorks(@Body() works: WorksInterface): Promise<Works> {
    return this.worksService.createWorks(works);
  }
}
