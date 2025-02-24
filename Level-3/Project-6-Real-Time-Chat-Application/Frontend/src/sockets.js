import { io } from "socket.io-client";

const URL = "http://localhost:8000";

const Socket = io(URL, { autoConnect: false });
const userCheck = io(`${URL}/user-check`);
export { userCheck, Socket };
