// src/role/role.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RoleService {
  constructor(private readonly prisma: PrismaService) {}

  async findByName(name: string) {
    return this.prisma.client.role.findUnique({ where: { name } });
  }
}
