"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const books_routes_1 = __importDefault(require("@modules/books/routes/books.routes"));
const routes = (0, express_1.Router)();
routes.use('/books', books_routes_1.default);
exports.default = routes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc2hhcmVkL2h0dHAvcm91dGVzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscUNBQWlDO0FBQ2pDLHNGQUE2RDtBQUU3RCxNQUFNLE1BQU0sR0FBRyxJQUFBLGdCQUFNLEdBQUUsQ0FBQztBQUV4QixNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxzQkFBVyxDQUFDLENBQUM7QUFFbEMsa0JBQWUsTUFBTSxDQUFDIn0=