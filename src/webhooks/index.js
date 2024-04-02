import {Router} from "express";
import { appUninstall } from "./controller";
const router = Router()
router.post('/app/uninstall',appUninstall)
export default router;