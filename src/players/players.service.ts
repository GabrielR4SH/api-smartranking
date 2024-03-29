import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { GeneratePlayerDto } from './dtos/gen-palyer.dto'; // Verifique se o nome do arquivo está correto
import { Player } from './interfaces/player.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PlayersService {

    private players: Player[] = [];
    private readonly logger = new Logger(PlayersService.name);

    async createAndUpdate_player(generatePlayerDto: GeneratePlayerDto): Promise<void> {
        
        const {email} = generatePlayerDto;
        const playerFound = await this.players.find(player => player.email === email);

        if(playerFound){
            await this.update(playerFound, generatePlayerDto);
        }
        else{
            await this.create(generatePlayerDto);
        }
    }

    async getAllPlayers(): Promise<Player[]>{
        return await this.players;
    }

    async getPlayerEmail(email:string): Promise<Player>{
        const playerFound = this.players.find(player => player.email === email)
        if(!playerFound){
            throw new NotFoundException(`O email: ${email} é invalido`);
        }
        return playerFound;
    }

    async deletePlayerWithEmail(email): Promise<void>{
        const playerFound =  this.players.find(player => player.email === email)
        this.players = this.players.filter(player => player.email !== playerFound.email)
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
        this.logger.log(`Player => ${JSON.stringify(player)}`);
        this.players.push(player);
        return player;
        //
    }

    private update(playerFound: Player, generatePlayerDto: GeneratePlayerDto):void {
        const {nome} = generatePlayerDto;        
        playerFound.nome = nome;
    }
}
