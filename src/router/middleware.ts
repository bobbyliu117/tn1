import {Request,Response,NextFunction} from 'express';

export const reqTagger = (tag: string) => (req:Request, res:Response,next:NextFunction) => {
	req.tag = tag;
	next();
};