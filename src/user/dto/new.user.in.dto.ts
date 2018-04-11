export class NewUserInDto {
    readonly mail: string;
    readonly password: string;
    readonly firstname: string;
    readonly lastname: string;
    readonly level: string;
    readonly formation: string;
    readonly verifyUseCondition: boolean;
    readonly ugId: number;
}