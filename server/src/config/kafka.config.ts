import { Kafka, logLevel, type KafkaConfig } from "kafkajs"

import fs from "fs";

export const kafka = new Kafka({
  brokers: [process.env.KAFKA_BROKER!],
  ssl: {
    ca: [fs.readFileSync("./certs/ca.pem", "utf-8")],
  },
  sasl: {
    mechanism: "scram-sha-256",
    username: process.env.KAFKA_USERNAME!,
    password: process.env.KAFKA_PASSWORD!,
  },
  logLevel: logLevel.ERROR,
});

export const producer = kafka.producer()
export const consumer = kafka.consumer({ groupId: "chats" })

export const connectKafkaProducer = async() => {
    await producer.connect()
    console.log("Kafka producer connected")
}

