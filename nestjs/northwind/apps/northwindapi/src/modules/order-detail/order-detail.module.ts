import { Module } from '@nestjs/common';
import { OrderDetailService } from './order-detail.service';
import { OrderDetailController } from './order-detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDetail } from '@bpm/data/models/orderdetail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderDetail])],
  controllers: [OrderDetailController],
  providers: [OrderDetailService],
})
export class OrderDetailModule {}
