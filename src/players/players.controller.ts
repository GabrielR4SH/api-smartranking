import { Controller, Post } from '@nestjs/common';

@Controller('api/v1/players') //rotas
export class PlayersController {

    @Post('create')
    async create_Update_Player() {
        return JSON.stringify({
            "name:":"Diego"
        })
    }

}
