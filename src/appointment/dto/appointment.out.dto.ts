export class AppointmentOutDto {
    readonly appId: number;
    readonly hBegin: string;
    readonly hEnd: string;
    readonly appDate: Date;
    readonly place: string;
    readonly object: string;
    readonly message: string;
    readonly senderId: number;
    readonly receiverId: number;
    readonly status: boolean;
}