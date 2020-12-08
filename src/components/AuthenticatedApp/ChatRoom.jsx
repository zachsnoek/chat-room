import React from "react";
import { Link } from "react-router-dom";
import { chatRooms } from "./chatRooms";
import { Messages } from "./Messages";
import { MessageInput } from "./MessageInput";

const ChatRoom = ({ match, history }) => {
    const { roomId } = match.params;
    const roomIdIsValid = chatRooms.some((room) => room.roomId === roomId);

    if (!roomIdIsValid) {
        history.push("/");
    }

    return (
        <div id="chat-room">
            <div id="chat-room-info">
                <h1>Welcome!</h1>
                <Link to="/">Choose a different room</Link>
            </div>
            <Messages roomId={roomId} />
            <MessageInput roomId={roomId} />
        </div>
    );
};

export { ChatRoom };
