import { Button, Modal } from 'antd'
import { useState } from 'react';
import 'antd/dist/reset.css';

const AddCash = () => {
    const [isModalOpen, setModal] = useState(false);

    return(
        <div>
            <Modal open={isModalOpen} onCancel={()=>setModal(!isModalOpen)}>
                teste
            </Modal>
            <Button onClick={()=>setModal(!isModalOpen)}>
                ativar modal
            </Button>
        </div>
    );
}

export default AddCash