import { Injectable, Logger } from '@nestjs/common';
import { GeneratePlayerDto } from './dtos/gen-palyer.dto'; // Verifique se o nome do arquivo está correto
import { Player } from './interfaces/player.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PlayersService {

    private players: Player[] = [];
    private readonly logger = new Logger(PlayersService.name);

    async createAndUpdate_player(generatePlayerDto: GeneratePlayerDto): Promise<void> {
        this.logger.log(`gen Player: ${generatePlayerDto}`);
        await this.create(generatePlayerDto);
    }

    private create(generatePlayerDto: GeneratePlayerDto): Player {
        const {nome, telefoneCelular, email} = generatePlayerDto;
    
        const player: Player = {
            id: uuidv4(),
            nome,
            telefoneCelular,
            email,
            ranking: 'A',
            posicaoRanking: 1,
            urlFotoJogador: 'www.google.com.br/foto123.jpg'
        };
    
        this.logger.log(`Player => ${JSON.stringify(player)}`)
        this.players.push(player);
        return player;
    }
}
