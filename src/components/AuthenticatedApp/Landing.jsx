import React from "react";
import { Link } from "react-router-dom";
import { chatRooms } from "./chatRooms";

const Landing = () => {
    return (
        <div id="landing">
            <h1>Choose a Chatroom Topic</h1>
            {chatRooms.map(({ roomId, title }) => (
                <ChatRoomLink to={roomId} roomTitle={title} key={roomId} />
            ))}
        </div>
    );
};

const ChatRoomLink = ({ to, roomTitle }) => {
    return (
        <div id="chat-room-link">
            <Link to={`/room/${to}`}>{roomTitle}</Link>
        </div>
    );
};

export { Landing };
