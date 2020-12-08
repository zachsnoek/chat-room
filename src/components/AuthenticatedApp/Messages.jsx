import React from "react";
import { useAuth, useMessages } from "hooks";

const Messages = ({ roomId }) => {
    const { user } = useAuth();
    const { messages } = useMessages({ roomId });
    const containerRef = React.useRef(null);

    React.useLayoutEffect(() => {
        if (!containerRef.current) {
            return;
        }

        containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }, [messages, roomId]);

    return (
        <div id="messages-container" ref={containerRef}>
            {messages.map(({ messageId, uid, displayName, message }) => {
                const msgFromCurrentUser = uid === user.uid;

                return (
                    <div
                        key={messageId}
                        id="message-container"
                        className={`${
                            msgFromCurrentUser ? "message-from-user" : ""
                        }`}
                    >
                        <div id="message-username">
                            {displayName} {msgFromCurrentUser ? "(You)" : ""}
                        </div>
                        <div>{message}</div>
                    </div>
                );
            })}
        </div>
    );
};

export { Messages };
