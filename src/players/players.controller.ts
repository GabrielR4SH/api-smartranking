import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { GeneratePlayerDto } from './dtos/gen-palyer.dto';
import { PlayersService } from './players.service';
import { Player } from './interfaces/player.interface';

@Controller('api/v1/players') //rotas
export class PlayersController {


    constructor(private readonly playersService: PlayersService) {}

    @Post('create')
    async create_Update_Player(@Body() generatePlayerDto: GeneratePlayerDto) {
        await this.playersService.createAndUpdate_player(generatePlayerDto);
    }

    @Get('all')
    async getPlayers(
        @Query('email') email:string):Promise<Player[] | Player>{

            if(email){
                return await this.playersService.getPlayerEmail(email);
            }else{
                return await this.playersService.getAllPlayers();
            }
    }



}
