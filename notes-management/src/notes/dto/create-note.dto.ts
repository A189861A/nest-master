import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';


export class CreateNoteDto {
    @ApiProperty({ description: '文章标题' })
    @IsNotEmpty({ message: '文章标题必填' })
    title: string;
    
    @IsString({message: '内容为字符串'})
    @IsNotEmpty({ message: '缺少内容' })
    @ApiProperty({ description: '内容' })
    content: string;
    
    @ApiPropertyOptional({ description: '创建时间' })
    createTime: Date;
    
    @ApiPropertyOptional({ description: '更新时间' })
    updateTime: Date;
    
    @ApiPropertyOptional({ description: '是否删除' })
    isDelete: boolean;      
}
