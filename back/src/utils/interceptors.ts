import { extname } from 'path';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';

export const UploadImageInterceptor = FileInterceptor('file', {
  storage: diskStorage({
    destination: './src/skill/logos',
    filename: (req, file, callback) =>
      callback(null, `${Date.now()}${extname(file.originalname)}`),
  }),
});
