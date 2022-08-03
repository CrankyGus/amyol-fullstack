import { Module } from '@nestjs/common';
import { WorksService } from './works.service';
import { WorksController } from './works.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Works } from '../works/models/works.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Works])],
  providers: [WorksService],
  controllers: [WorksController],
})
export class WorksModule {}
