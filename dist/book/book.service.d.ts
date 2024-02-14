import { Book } from './entity/book.entity';
import { BookDTO } from './entity/Book.dto';
export declare class BookService {
    private booksRepository;
    constructor(booksRepository: typeof Book);
    store(bookDTO: BookDTO): Promise<Book>;
    findAll(): Promise<Book[]>;
    destroy(id: number): Promise<number>;
    getById(id: number): Promise<Book>;
    update(id: number, body: BookDTO): Promise<number[]>;
}
