import io from "socket.io-client";
import { API_HOST } from "./server";

const socket = io.connect(API_HOST);

export default socket;
