import { Module } from '@nestjs/common';
import { PlayersController } from './players.controller';

//Decorator
@Module({ 
  controllers: [PlayersController] 
}) 
export class PlayersModule {}
