import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}
  create(createTaskInput: CreateTaskInput) {
    return this.prisma.task.create({
      data: createTaskInput,
    });
  }

  findAll() {
    return this.prisma.task.findMany({
      where: { Isdeleted: false },
    });
  }

  findOne(id: number) {
    return this.prisma.task.findUnique({
      where: { id },
    });
  }

  update(id: number, updateTaskInput: UpdateTaskInput) {
    return this.prisma.task.update({
      where: { id },
      data: updateTaskInput,
    });
  }

  remove(id: number) {
    return this.prisma.task.update({
      where: { id },
      data: { Isdeleted: true },
    });
  }
}
