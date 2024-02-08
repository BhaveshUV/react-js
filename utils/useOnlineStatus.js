import { useState, useEffect } from "react";

const useOnlineStatus = () => {
    const [status, setStatus] = useState(true);

    useEffect(() => {
        let offlineAction = () => {
            setStatus(false);
        };
        let onlineAction = () => {
            setStatus(true);
        }
        window.addEventListener("offline", offlineAction, []);
        window.addEventListener("online", onlineAction, []);

        return () => {
            window.removeEventListener("online", onlineAction)
            window.removeEventListener("offline", offlineAction)
        }
    })

    return status;
}

export default useOnlineStatus;