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
class Authentication {
    constructor(Email, Password, Client_Name, Client_Vendor, Url = 'https://app.activecollab.com') {
        this.email = Email;
        this.password = Password;
        this.client_name = Client_Name;
        this.client_vendor = Client_Vendor;
        this.intent = '';
        this.X_Angie_AuthApi = '';
        this.URL = Url;
    }
    getToken() {
        return this.X_Angie_AuthApi;
    }
    setToken(newToken) {
        return this.X_Angie_AuthApi = newToken;
    }
    setIntent(newIntent) {
        return this.intent = newIntent;
    }
    getEmail() {
        return this.email;
    }
    getPassword() {
        return this.password;
    }
    tokenURL(account_id) {
        if (typeof account_id === 'undefined') {
            return `${this.getURL()}/api/v1/issue-token`;
        }
        return `${this.getURL()}/${account_id}/api/v1/issue-token-intent`;
    }
    getURL() {
        return this.URL;
    }
    setURL(newUrl) {
        return this.URL = newUrl;
    }
    getClientName() {
        return this.client_name;
    }
    getClientVendor() {
        return this.client_vendor;
    }
    fetchIntent() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield axios_1.default.post(`https://activecollab.com/api/v1/external/login`, {
                    email: this.getEmail(),
                    password: this.getPassword()
                });
                if (res.data.is_ok === 1)
                    return this.setIntent(res.data.user.intent);
            }
            catch (error) {
                console.error(error.response);
            }
        });
    }
}
exports.Authentication = Authentication;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aGVudGljYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQXV0aGVudGljYXRpb24vQXV0aGVudGljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrREFBMEI7QUFFMUIsTUFBc0IsY0FBYztJQVNoQyxZQUFZLEtBQWEsRUFBRSxRQUFnQixFQUFFLFdBQW1CLEVBQUUsYUFBcUIsRUFBRSxHQUFHLEdBQUcsOEJBQThCO1FBQ3pILElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO1FBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFBO1FBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFBO1FBQ2xDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFBO1FBQ3pCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFBO0lBQ2xCLENBQUM7SUFFUyxRQUFRO1FBQ2QsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFBO0lBQy9CLENBQUM7SUFFUyxRQUFRLENBQUMsUUFBZ0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQTtJQUMxQyxDQUFDO0lBR1MsU0FBUyxDQUFDLFNBQWlCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUE7SUFDbEMsQ0FBQztJQUVTLFFBQVE7UUFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDckIsQ0FBQztJQUVTLFdBQVc7UUFDakIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFBO0lBQ3hCLENBQUM7SUFFUyxRQUFRLENBQUMsVUFBZTtRQUM5QixJQUFJLE9BQU8sVUFBVSxLQUFLLFdBQVcsRUFBRTtZQUNuQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxxQkFBcUIsQ0FBQTtTQUMvQztRQUNELE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksVUFBVSw0QkFBNEIsQ0FBQTtJQUNyRSxDQUFDO0lBRU0sTUFBTTtRQUNULE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQTtJQUNuQixDQUFDO0lBRU0sTUFBTSxDQUFDLE1BQWM7UUFDeEIsT0FBTyxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQTtJQUM1QixDQUFDO0lBRU0sYUFBYTtRQUNoQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUE7SUFDM0IsQ0FBQztJQUVNLGVBQWU7UUFDbEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFBO0lBQzdCLENBQUM7SUFFZSxXQUFXOztZQUN2QixJQUFJO2dCQUNBLE1BQU0sR0FBRyxHQUFHLE1BQU0sZUFBSyxDQUFDLElBQUksQ0FBQyxnREFBZ0QsRUFBRTtvQkFDM0UsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ3RCLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFO2lCQUMvQixDQUFDLENBQUE7Z0JBQ0YsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDO29CQUFFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTthQUN4RTtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFBO2FBQ2hDO1FBQ0wsQ0FBQztLQUFBO0NBR0o7QUE1RUQsd0NBNEVDIn0=