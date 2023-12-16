
import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { RoleService } from './role.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('role')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':name')
  async getRoleByName(@Param('name', ParseIntPipe) name: string) {
    return this.roleService.findByName(name);
  }
}
