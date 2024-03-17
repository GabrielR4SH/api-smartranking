import { Body, Controller, Get, Post } from '@nestjs/common';
import { GeneratePlayerDto } from './dtos/gen-palyer.dto';
import { PlayersService } from './players.service';

@Controller('api/v1/players') //rotas
export class PlayersController {


    constructor(private readonly playersService: PlayersService) {}

    @Post('create')
    async create_Update_Player(@Body() generatePlayerDto: GeneratePlayerDto) {
        await this.playersService.createAndUpdate_player(generatePlayerDto);
    }

}
