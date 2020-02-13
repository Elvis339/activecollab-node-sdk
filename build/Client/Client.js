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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const Authentication_1 = require("../Authentication/Authentication");
class Client extends Authentication_1.Authentication {
    constructor(Email, Password, Client_Name, Client_Vendor, URL = 'https://app.activecollab.com', Account_ID) {
        super(Email, Password, Client_Name, Client_Vendor);
        this.token = '';
        super.setURL(URL);
        this.account_id = Account_ID;
    }
    /**
     *
     * @param component String
     * @description Builds API endpoint
     * @returns String
     */
    apiURL(component) {
        if (typeof this.account_id === 'undefined') {
            return `${this.getURL()}/api/v1/${component}`;
        }
        return `${this.getURL()}/${this.account_id}/api/v1/${component}/`;
    }
    /**
     * @description Issues token based on the account_id
     * @returns String X-Angie-AuthApi Token
     */
    issueToken() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Self-Hosted
                if (typeof this.account_id === 'undefined') {
                    const res = yield axios_1.default.post(this.tokenURL(this.account_id), {
                        username: this.getEmail(),
                        password: this.getPassword(),
                        client_name: this.getClientName(),
                        client_vendor: this.getClientVendor()
                    });
                    if (res.data.is_ok)
                        return this.setToken(res.data.token);
                    return this.getToken();
                }
                else {
                    // Cloud
                    let intent = yield this.fetchIntent();
                    const res = yield axios_1.default.post(this.tokenURL(this.account_id), {
                        intent,
                        client_name: this.getClientName(),
                        client_vendor: this.getClientVendor()
                    });
                    if (res.data.is_ok)
                        return this.setToken(res.data.token);
                    return this.getToken();
                }
            }
            catch (error) {
                console.error(error.response);
            }
        });
    }
    /**
     *
     * @param component String
     * @returns JSON
     * @description Auth Get Request
     */
    _get(component) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield axios_1.default.get(this.apiURL(component), {
                    headers: {
                        'X-Angie-AuthApiToken': this.getToken()
                    }
                });
                return res.data;
            }
            catch (error) {
                console.error(error.response);
            }
        });
    }
    /**
     *
     * @param component String
     * @returns JSON
     * @description Auth Post Request
     */
    _post(component, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield axios_1.default.post(this.apiURL(component), data, {
                    headers: {
                        'X-Angie-AuthApiToken': this.getToken()
                    }
                });
                return res.data;
            }
            catch (error) {
                console.error(error.response);
            }
        });
    }
    /**
     *
     * @param component String
     * @returns JSON
     * @description Auth Put Request
     */
    _put(component, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield axios_1.default.put(this.apiURL(component), data, {
                    headers: {
                        'X-Angie-AuthApiToken': this.getToken()
                    }
                });
                return res.data;
            }
            catch (error) {
                console.error(error.response);
            }
        });
    }
    /**
     *
     * @param component String
     * @returns JSON
     * @description Auth Delete Request
     */
    _delete(component) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield axios_1.default.delete(this.apiURL(component), {
                    headers: {
                        'X-Angie-AuthApiToken': this.token
                    }
                });
                return res.data;
            }
            catch (error) {
                console.error(error.response);
            }
        });
    }
}
exports.Client = Client;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0NsaWVudC9DbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrREFBeUI7QUFDekIscUVBQWlFO0FBRWpFLE1BQWEsTUFBTyxTQUFRLCtCQUFjO0lBSXRDLFlBQVksS0FBYSxFQUFFLFFBQWdCLEVBQUUsV0FBbUIsRUFBRSxhQUFxQixFQUFFLEdBQUcsR0FBRyw4QkFBOEIsRUFBRSxVQUFtQjtRQUM5SSxLQUFLLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUE7UUFIOUMsVUFBSyxHQUFXLEVBQUUsQ0FBQTtRQUl0QixLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFBO0lBQ2hDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLE1BQU0sQ0FBQyxTQUFpQjtRQUM1QixJQUFJLE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxXQUFXLEVBQUU7WUFDeEMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsV0FBVyxTQUFTLEVBQUUsQ0FBQTtTQUNoRDtRQUNELE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksSUFBSSxDQUFDLFVBQVUsV0FBVyxTQUFTLEdBQUcsQ0FBQTtJQUNyRSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0csVUFBVTs7WUFDWixJQUFJO2dCQUNBLGNBQWM7Z0JBQ2QsSUFBSSxPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssV0FBVyxFQUFFO29CQUN4QyxNQUFNLEdBQUcsR0FBRyxNQUFNLGVBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7d0JBQ3pELFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFO3dCQUN6QixRQUFRLEVBQUUs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