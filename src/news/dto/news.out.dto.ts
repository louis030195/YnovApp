export class NewsOutDto {
    readonly newsId: number;
    readonly category: string;
    readonly title: string;
    readonly description: string;
    readonly author: string;
    readonly creationDate: Date;
}