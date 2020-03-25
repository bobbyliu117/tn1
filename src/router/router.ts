import {Router, Request} from "express";
import {PASSCODE} from "../config/credentials";
import {Crawler} from "../main/Crawler";
import {DataManager} from "../managers/dataManager";

interface ReqWithBody extends Request {
	body: {passcode: string};
}

const router = Router();

router.post('/update', (async (req: ReqWithBody, res) => {
	if (req.body.passcode !== PASSCODE) {
		res.status(401).send({result: 'unauthorized'});
	} else {
		try {
			await Crawler.updateProperties();
		} catch (e) {
			res.status(503).send({error: e.message});
		}
		res.send({tag: req.tag});
	}
}));

router.get('/allproperties', ((req, res) => {
	res.send(JSON.stringify(DataManager.readProperties()));
}));

export default router;