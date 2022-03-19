import { Body, Controller, Get, Param, Post, UploadedFile } from "@nestjs/common"
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger"
import { PostService } from "../services/post.service"
import { PostModel } from "../models/post.model"
import { CreatePostDto } from "../types/dtos/create-post.dto"

@ApiTags('Posts')
@Controller('posts')
export class PostController {
  constructor(private postService: PostService) { }

  @ApiOperation({ summary: 'Create new post' })
  @ApiResponse({ status: 200, type: PostModel })
  @Post()
  create (
          @Body() postDto: CreatePostDto,
          @UploadedFile() image
          ) {
    return this.postService.createPost(postDto, image)
  }

  @Get('/:id')
  findOne(@Param('id') id: number) {
    return this.postService.findOne(id);
  }
}