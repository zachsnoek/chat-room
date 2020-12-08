import React from "react";
import { createDatabase, closeDatabase } from "services";

const useMessages = ({ roomId = "usa" } = {}) => {
    const [messages, setMessages] = React.useState([]);

    React.useEffect(() => {
        let isMounted = true;
        const database = createDatabase();

        database.ref(`messages/${roomId}`).on("value", (snapshot) => {
            const newMessages = snapshot?.val();
            const formattedMessages = newMessages
                ? Object.keys(newMessages).map((messageId) => ({
                      messageId,
                      ...newMessages[messageId],
                  }))
                : [];

            if (isMounted) {
                setMessages(formattedMessages);
            }
        });

        return () => {
            isMounted = false;
            closeDatabase(database);
        };
    }, [roomId]);

    return { messages };
};

export { useMessages };
