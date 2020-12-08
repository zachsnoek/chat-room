import firebase from "firebase/app";
import "firebase/firebase-database";

const createDatabase = () => {
    return firebase.database();
};

const closeDatabase = (database) => {
    database.ref().off();
};

const setData = (database, path, data) => {
    database.ref(path).set(data);
};

const sendMessage = ({ user, message, roomId = "test-room" }) => {
    const database = createDatabase();
    const currentTime = new Date().getTime();
    const messageId = `mid${currentTime}`;

    setData(database, `messages/${roomId}/${messageId}`, {
        ...user,
        message,
    });

    closeDatabase(database);
};

export { createDatabase, closeDatabase, sendMessage };
