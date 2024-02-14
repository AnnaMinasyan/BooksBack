"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const common_1 = require("@nestjs/common");
const book_service_1 = require("./book.service");
let BookController = class BookController {
    constructor(appService) {
        this.appService = appService;
    }
    async store(body) {
        try {
            return await this.appService.store(body);
        }
        catch (error) {
            throw new common_1.HttpException({ error: error.message }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getHello() {
        try {
            return await this.appService.findAll();
        }
        catch (error) {
            throw new common_1.HttpException({ error: error.message }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getById(param) {
        try {
            const { id } = param;
            return await this.appService.getById(id);
        }
        catch (error) {
            throw new common_1.HttpException({ error: error.message }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async update(param, body) {
        try {
            const { id } = param;
            await this.appService.update(id, body);
            return await this.appService.getById(id);
        }
        catch (error) {
            throw new common_1.HttpException({ error: error.message }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async destroy(param) {
        try {
            const { id } = param;
            return await this.appService.destroy(id);
        }
        catch (error) {
            throw new common_1.HttpException({ error: error.message }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.BookController = BookController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "store", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "getById", null);
__decorate([
    (0, common_1.Put)("/:id"),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)("/:id"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "destroy", null);
exports.BookController = BookController = __decorate([
    (0, common_1.Controller)("book"),
    __metadata("design:paramtypes", [book_service_1.BookService])
], BookController);
//# sourceMappingURL=book.controller.js.map