import {Picture} from "../../picture/entities/picture.entity";

export class NewEventInDto {
    readonly title: string;
    readonly description: string;
    readonly animatorId: number;
    readonly eventDate: Date;
    readonly time: string;
    readonly place: string;
    readonly eventBrite: string;
    readonly picturesId: Picture[];
}