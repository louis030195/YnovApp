export class NewsOutDto {
    readonly newsId: number;
    readonly category: string;
    readonly title: string;
    readonly description: string;
    readonly authorId: number;
    readonly creationDate: Date;
    readonly picturesId: number;
}