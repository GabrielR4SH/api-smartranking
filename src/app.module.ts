import { Module } from '@nestjs/common';
import { PlayersModule } from './players/players.module';
import { PlayersService } from './players/players.service';


@Module({
  imports: [PlayersModule],
  providers: [PlayersService],
  
})
export class AppModule {}
