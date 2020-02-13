"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("./Client/Client");
/**
 * Example
 * Using it for TS project -> Middleware or Services
 */
const middleware = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Init Cloud
        let client = new Client_1.Client('email', 'password', 'client-name', 'client-vendor', 'https://app.activecollab.com', 123456);
        let token = yield client.issueToken();
        let data = yield client._get('projects');
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
});
middleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBeUM7QUFFekM7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLEdBQUcsR0FBUyxFQUFFO0lBQzFCLElBQUk7UUFDQSxhQUFhO1FBQ2IsSUFBSSxNQUFNLEdBQUcsSUFBSSxlQUFNLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLDhCQUE4QixFQUFFLE1BQU0sQ0FBQyxDQUFBO1FBQ3BILElBQUksS0FBSyxHQUFHLE1BQU0sTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQ3JDLElBQUksSUFBSSxHQUFHLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO0tBQ3BCO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO0tBQ3JCO0FBQ0wsQ0FBQyxDQUFBLENBQUE7QUFDRCxVQUFVLEVBQUUsQ0FBQSJ9