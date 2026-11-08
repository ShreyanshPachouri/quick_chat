import { Kafka, logLevel } from "kafkajs"

import fs from "fs";

// On a host, pass the cert via KAFKA_CA_CERT (newlines escaped as \n).
// Locally it falls back to server/certs/ca.pem.
const caCert = process.env.KAFKA_CA_CERT
  ? process.env.KAFKA_CA_CERT.replace(/\\n/g, "\n")
  : fs.readFileSync("./certs/ca.pem", "utf-8");

export const kafka = new Kafka({
  brokers: [process.env.KAFKA_BROKER!],
  ssl: {
    ca: [caCert],
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
