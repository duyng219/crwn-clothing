import { Alert } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

export default () => (
    <>
        <Alert message="Success Tips" type="success" showIcon />
        <Alert message="Informational Notes" type="info" showIcon />
        <Alert message="Warning" type="warning" showIcon closable />
        <Alert message="Error" type="error" showIcon />
        <Alert
        message="Success Tips"
        description="Detailed description and advice about successful copywriting."
        type="success"
        showIcon
        />
        <Alert
        message="Informational Notes"
        description="Additional description and information about copywriting."
        type="info"
        showIcon
        />
        <Alert
        message="Warning"
        description="This is a warning notice about copywriting."
        type="warning"
        showIcon
        closable
        />
        <Alert
        message="Error"
        description="This is an error message about copywriting."
        type="error"
        showIcon
        />
    </>
);