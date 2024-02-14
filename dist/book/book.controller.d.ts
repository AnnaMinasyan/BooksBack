import { BookService } from './book.service';
import { Book } from './entity/book.entity';
export declare class BookController {
    private readonly appService;
    constructor(appService: BookService);
    store(body: any): Promise<Book>;
    getHello(): Promise<Book[]>;
    getById(param: any): Promise<Book>;
    update(param: any, body: any): Promise<Book>;
    destroy(param: any): Promise<number>;
}
