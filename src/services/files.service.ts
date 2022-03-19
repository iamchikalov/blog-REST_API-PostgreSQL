import { HttpException, HttpStatus, Injectable } from "@nestjs/common"
import * as uuid from 'uuid'
import * as path from 'path'
import * as fs from 'fs'

@Injectable()
export class FilesService {

  async createFile(file): Promise<string> {
    try {
      const fileName = uuid.v4() + '.jpeg'
      console.log(fileName)
      const filePath = path.resolve(__dirname, '..', 'static')
      console.log(filePath)
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true })
        console.log('if_statement')
      }
        fs.writeFileSync(path.join(filePath, fileName), file.buffer)
      console.log('before_return')
        return fileName
    } catch (e) {
      throw new HttpException('An error occurred while writing the file', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
