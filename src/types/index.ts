export interface IGetAll {
    page?: number;
    limit?: number;
    filter?: string;
}

export interface IDelete {
    id?: string;
}

export interface IGet {
    id?: string;
}

export interface IPut {
    id?: string;
}
