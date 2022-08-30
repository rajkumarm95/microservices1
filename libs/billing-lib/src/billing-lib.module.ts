import { BillingLibRepository } from './billing-lib.repository';
import { Module } from '@nestjs/common';
import { BillingLibController } from './billing-lib.controller';
import { BillingLibService } from './billing-lib.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BillingLib } from './entities/billing-lib.entity';

@Module({
  controllers: [BillingLibController],
  providers: [BillingLibService, BillingLibRepository],
  exports: [BillingLibService],
  imports: [BillingLibModule, TypeOrmModule.forFeature([BillingLib])],
})
export class BillingLibModule {}
