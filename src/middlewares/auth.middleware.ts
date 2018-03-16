import { Middleware, NestMiddleware, ExpressMiddleware } from '@nestjs/common';

@Middleware()
export class AuthMiddleware implements NestMiddleware {
    resolve(...args: any[]): ExpressMiddleware {
        return (req, res, next) => {
            console.log('Token verification ...');
            console.log(req.headers['token']);
            if(req.headers['token'] == 'aZeR') {
                console.log('Token is okay, allowed');
                next();
            }else {
                console.log('Incorrect token');
                res.status(403).send('Forbidden');
            }
        };
    }
}