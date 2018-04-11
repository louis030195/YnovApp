import {Picture} from "../../picture/entities/picture.entity";

export class NewNewsInDto {
    readonly category: string;
    readonly title: string;
    readonly description: string;
    readonly authorId: number;
    readonly creationDate: Date;
    readonly picturesId: Picture[];
}