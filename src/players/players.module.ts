import { Module } from '@nestjs/common';
import { PlayersController } from './players.controller';
import { PlayersService } from './players.service';

//Decorator
@Module({ 
  controllers: [PlayersController], providers: [PlayersService] 
}) 
export class PlayersModule {}
