import { Body, Controller, Post } from '@nestjs/common';
import { GeneratePlayerDto } from './dtos/gen-palyer.dto';

@Controller('api/v1/players') //rotas
export class PlayersController {

    @Post('create')
    async create_Update_Player(@Body() generatePlayerDto: GeneratePlayerDto) {
        const { email } = generatePlayerDto
        return {
            email: email
        };
    }

}
