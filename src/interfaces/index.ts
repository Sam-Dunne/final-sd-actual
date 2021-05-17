import { Request } from 'express';

export interface I {

};

export interface IBooks {
    id?: number;
    categoryid?: number;
    title?: string;
    author?: string;
    price?: number;
    _created?: Date
};

export interface IBookFull {
    id?: number;
    categoryid?: number;
    title?: string;
    author?: string;
    price?: number;
    _created?: Date;
    name?: string;
};

export interface IUsers {
    id?: number;
    email?: string;
    password?: string;
    role?: string;
    _created?: Date;
    name?: string;
};

export interface ICategories {
    id?: number;
    name?: string;
};

export interface IPayload extends IUsers {
    userid?: number;
};

export interface IReqUser extends Request {
    user?: IPayload;
};

export interface IReqPayload extends Request {
    user?: {
        userid?: number;
        email?: string;
        role?: string
    }
};

export interface MySQLResponse {
    affectedRows: number;
    insertId: number;
}