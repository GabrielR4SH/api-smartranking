import { Injectable, Logger } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { Player } from './interfaces/players.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PlayersService {
  private players: Player[] = [];
  private readonly logger = new Logger(PlayersService.name);

  async createUpdatePlayer(CreatePlayerDto: CreatePlayerDto): Promise<void> {
    this.logger.log(` CreatePlayerDto: ${CreatePlayerDto}`);
    await this.create(CreatePlayerDto);
  }

  private create(CreatePlayerDto: CreatePlayerDto): void {
    const { name, phoneNumber, email } = CreatePlayerDto;
    const player: Player = {
      _id: uuidv4(),
      name,
      phoneNumber,
      email,
      ranking: 'A',
      positionRanking: 1,
      urlPhotoPlayer: 'www.google.com.br/foto123.jpg',
    };
    this.logger.log(`CreatePlayerDto: ${JSON.stringify(player)}`);
    this.players.push(player);
  }
}
