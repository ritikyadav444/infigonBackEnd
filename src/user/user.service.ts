
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(username: string) {
    return this.prisma.client.user.findUnique({ where: { username } });
  }
}
