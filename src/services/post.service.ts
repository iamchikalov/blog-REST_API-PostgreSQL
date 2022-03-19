import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/sequelize"
import { PostModel } from "../models/post.model"
import { CreatePostDto } from "../types/dtos/create-post.dto"
import { FilesService } from "./files.service"

@Injectable()
export class PostService {
  constructor(
    @InjectModel(PostModel) private postRepository: typeof PostModel,
    private fileService: FilesService
    ) { }

  async createPost(dto: CreatePostDto, image: any) {
    const fileName = await this.fileService.createFile(image)
    const post = await this.postRepository.create({ ...dto, image: fileName })
    return post
  }

  async findOne (id: number) {
    return await this.postRepository.findByPk(id, {})
  }

}