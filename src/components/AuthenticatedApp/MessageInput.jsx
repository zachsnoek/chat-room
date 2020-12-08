import React from "react";
import { sendMessage } from "services";
import { useAuth } from "hooks";

const MessageInput = ({ roomId }) => {
    const { user } = useAuth();
    const [message, setMessage] = React.useState("");

    const handleMessageInputChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendMessage({ user, message, roomId });
        setMessage("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div id="message-input">
                <div id="message-input-container">
                    <input
                        type="text"
                        value={message}
                        onChange={handleMessageInputChange}
                        minLength={1}
                    />
                    <button
                        id="send-button"
                        disabled={!(message.length >= 1)}
                        type="submit"
                    >
                        Send Message
                    </button>
                </div>
            </div>
        </form>
    );
};

export { MessageInput };
