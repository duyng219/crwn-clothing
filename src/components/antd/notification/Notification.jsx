import { notification, } from "antd";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

// export const NotificationRight = (type, message, description = "") => {
//     notification[type]({
//         message: message,
//         description: description,
//     });
// };

export const Notification = (type, message, placement, description = "") => {
    notification[type]({
        message:  message,
        placement: placement,
        description: description,
    });
};