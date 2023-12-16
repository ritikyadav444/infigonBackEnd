
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService {
  private prisma: PrismaClient = new PrismaClient();

  get client(): any {
    return this.prisma;
  }
}
