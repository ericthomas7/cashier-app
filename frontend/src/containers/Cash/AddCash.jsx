import { Button, Modal, Input, InputNumber, Form, Radio, Select, Spin } from 'antd'
import { useRef, useState } from 'react';
import { loadFlowCategories, addCashFlow } from '../../requests';
import { CentralizaBtn } from '../styles/Cash.style';


const AddCash = ({ cashes, setCashes}) => {
    const [isModalOpen, setModal] = useState(false);
    const [flowCategories, setFlowCategories] = useState([])
    const [loading, setLoading ] = useState('')

    const [form] = Form.useForm();

    const flowType = Form.useWatch('flow_type', form);

    const SubmitForm = async (values) => {
        try{
            setLoading('add-cash')
            const responseData = await addCashFlow({
                value: values.value,
                description: values.description,
                flow_category_id: values.flow_category_id
            })
            setCashes([...cashes, responseData])
            setModal(false)
            setLoading('')
        }
        catch(err){
            console.log(err)
        }
        
    }

    const loadModal = async () => {
        setLoading('l-categories')
        if(!isModalOpen){
            if(flowCategories.length == 0){
                const categories = await loadFlowCategories();
                setFlowCategories(categories)
            }
            
            setModal(true)
        }
        else{
            setModal(false)
        }
        setLoading('')
    }

    return(
        <div>
            <Modal open={isModalOpen} onCancel={()=>setModal(false)} footer={[]}>
                <Form form={form} onFinish={SubmitForm} layout="vertical" initialValues={{flow_type: "expense", value: 0.00}}>
                    <Form.Item name="value" label="Value" required>
                        <InputNumber precision={2} decimalSeparator="." min={0} disabled={!true}/>
                    </Form.Item>
                    <Form.Item name="description" label="Description" required>
                        <Input/>
                    </Form.Item>
                    <Form.Item name="flow_type" required>
                        <Radio.Group>
                            <Radio.Button value="expense">Expense</Radio.Button>
                            <Radio.Button value="income">Income</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item name="flow_category_id" required label="Category">
                        <Select>
                            {   
                                flowCategories
                                .filter((category)=>
                                    category.flow_type === flowType
                                )
                                .map((category)=>{
                                    return(
                                        <Select.Option key={category.id} value={category.id}>
                                            {category.name}
                                        </Select.Option>
                                    )
                                })
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType='submit' onClick={()=>setModal(false)} disabled={loading=='add-cash'}>
                            Cancel
                        </Button>
                        <Button htmlType='submit' type='primary' disabled={loading=='add-cash'}>
                            {loading=='add-cash' ? <Spin/> : null}
                            Add
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
            <CentralizaBtn>
                <Button onClick={()=>loadModal()} disabled={loading=='l-categories'}>
                    {loading=='l-categories' ? <Spin/> : null}
                    Add cash flow
                </Button>
            </CentralizaBtn>
        </div>
    );
}

export default AddCash