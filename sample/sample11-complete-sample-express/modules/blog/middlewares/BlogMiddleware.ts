import {MiddlewareInterface} from "../../../../../src/middleware/MiddlewareInterface";
import {Middleware} from "../../../../../src/decorator/decorators";

@Middleware()
export class BlogMiddleware implements MiddlewareInterface {

    use(request: any, response: any, next?: Function): any {
        console.log("logging request from blog middleware...");
        next("ERROR IN BLOG MIDDLEWARE");
        // console.log("extra logging request from blog middleware...");
    }
    
}