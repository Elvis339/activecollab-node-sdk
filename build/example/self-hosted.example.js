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
         *
         */
        const client = new Client_1.Client('your@email.com', 'password', 'appName', 'organization-name', 'http://your-url');
        yield client.issueToken();
        const data = yield client._get('projects');
        console.log(data);
    }
    catch (error) {
        console.error(error);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZi1ob3N0ZWQuZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2V4YW1wbGUvc2VsZi1ob3N0ZWQuZXhhbXBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGlEQUE2QztBQUU3QyxNQUFNLFVBQVUsR0FBRyxHQUFTLEVBQUU7SUFDMUIsSUFBSTtRQUNBOzs7Ozs7O1dBT0c7UUFDSCxNQUFNLE1BQU0sR0FBRyxJQUFJLGVBQU0sQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixFQUFFLGlCQUFpQixDQUFDLENBQUE7UUFDMUcsTUFBTSxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDekIsTUFBTSxJQUFJLEdBQUcsTUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7S0FDcEI7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7S0FDdkI7QUFDTCxDQUFDLENBQUEsQ0FBQSJ9