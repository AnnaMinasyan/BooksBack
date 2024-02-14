import { Model } from 'sequelize-typescript';
export declare class Book extends Model {
    title: string;
    author: string;
    year_of_publication: number;
}
