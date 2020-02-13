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
const Client_1 = require("../src/Client/Client");
const middleware = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        /**
         * @param Email @type String
         * @param Password @type String
         * @param Client_Name @type String
         * @param Client_Vendotr @type String
         * @param URL @type String
         * @param Account_ID @type number
         */
        const client = new Client_1.Client('your@email.com', 'password', 'appName', 'organization-name', 'https://app.activecollab.com', 123456);
        yield client.issueToken();
        const data = yield client._get('projects');
        console.log(data);
    }
    catch (error) {
        console.error(error);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQuZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL2Nsb3VkLmV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxpREFBNkM7QUFFN0MsTUFBTSxVQUFVLEdBQUcsR0FBUyxFQUFFO0lBQzFCLElBQUk7UUFDQTs7Ozs7OztXQU9HO1FBQ0gsTUFBTSxNQUFNLEdBQUcsSUFBSSxlQUFNLENBQUMsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxtQkFBbUIsRUFBRSw4QkFBOEIsRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUMvSCxNQUFNLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUN6QixNQUFNLElBQUksR0FBRyxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtLQUNwQjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtLQUN2QjtBQUNMLENBQUMsQ0FBQSxDQUFBIn0=