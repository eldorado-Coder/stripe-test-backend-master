import express from "express";

const router = express.Router();

import { prices, createSubscription, subscriptionStatus, subscriptions, customerPortal } from "../controller/subs";
import { requireSignIn } from '../middlewares'

router.get("/prices", prices);
router.post("/create-subscription", requireSignIn, createSubscription);
router.get("/subscription-status", requireSignIn, subscriptionStatus);
router.get("/subscriptions", requireSignIn, subscriptions);
router.get("/customer-portal", requireSignIn, customerPortal);


module.exports = router;
