"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.booksProviders = void 0;
const book_entity_1 = require("./entity/book.entity");
exports.booksProviders = [
    {
        provide: 'BOOK_REPOSITORY',
        useValue: book_entity_1.Book,
    },
];
//# sourceMappingURL=book.repository.js.map