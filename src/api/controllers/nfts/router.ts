import express from "express";
import controller from "./controller";
export default express
  .Router()
  .get("/", controller.getNFTs)
  .get("/:id", controller.getNFT)
  .get("/stat/:id", controller.getStatNFTsUser)
  .get("/series/data", controller.getNFTsBySeries)
  // .get("/series/can-add", controller.getNFTsBySeries)
  // .get("/series/status", controller.getNFTsBySeries)
  .post("/add-nft-category", controller.createNFT)