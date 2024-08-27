import { Body, Controller, Post } from '@nestjs/common';
import { json } from 'stream/consumers';
import { CreatePlayerDto } from './dto/create-player.dto';

@Controller('api/v1/players')
export class PlayersController {
  @Post()
  async createUpdatePlayer(@Body() CreatePlayerDto: CreatePlayerDto) {
    const { email } = CreatePlayerDto;
    return JSON.stringify(`{ "email": ${email} }`);
  }
}
