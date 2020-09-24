import express from "express";
import mongoose from "mongoose";

const server = () => {
  const app = express();
  app.listen({ port: 4001 }, () => {
    console.log("connected");
  });
};

server();
