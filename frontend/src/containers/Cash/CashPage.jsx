import AddCash from './AddCash'
import { Title, Subtitle, TableHolder, Container } from '../styles/Cash.style';
import { loadCashes } from '../../requests';
import { useEffect, useState } from 'react';
import { Button, Modal, Spin, Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { deleteCash } from '../../requests';



const CashPage = () => {
    const [ cashes, setCashes ] = useState([])
    const [ isDeleteOpen, setDelete ] = useState(null)
    const [ loading, setLoading ] = useState('')

    const columns = [
      {
        title: 'Value',
        dataIndex: 'value',
        key: 'value',
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
      },
      {
        title: 'Category',
        dataIndex: 'flow_category_name',
        key: 'flow_category_name',
      },
      {
        title: '',
        dataIndex: 'id',
        key: 'id',
        render: (_,record) =>
          <EditOutlined />
      },
      {
        title: '',
        dataIndex: 'id',
        key: 'id',
        render: (_,record) =>
          <DeleteOutlined onClick={()=>setDelete(record.id)}/>
      },
    ];

    const onDeleteCash = async () => {
      setLoading('deleting')
      await deleteCash(isDeleteOpen)
      const oldCashes = cashes
      const deletedIndex = oldCashes.findIndex((cash)=>cash.id==isDeleteOpen)
       oldCashes.splice(deletedIndex,1)
      setCashes([...oldCashes])
      setDelete(null)
      setLoading('')
    }
    
    useEffect(async () => {
        const responseData = await loadCashes()
        setCashes(responseData)
    },[])


    return(
        <Container>
            <Title>
                Cashier App
            </Title>
            <Subtitle>
                Register your expenses and incomes
            </Subtitle>
            <AddCash cashes={cashes} setCashes={setCashes}/>
            <TableHolder>
                <Table dataSource={cashes} columns={columns}/>
                <Modal open={isDeleteOpen} onCancel={()=>setDelete(null)} footer={[]}>
                  <div>
                    {loading=='deleting' ? <Spin/> : "Are you sure you want to delete?"}
                  </div>
                  <Button onClick={()=>setDelete(null)} disabled={loading=='deleting'}>
                    Cancel
                  </Button>
                  <Button type="primary" onClick={()=>onDeleteCash()}  disabled={loading=='deleting'}>
                    {loading=='deleting' ? <Spin/> : null}
                    Delete
                  </Button>
                </Modal>
            </TableHolder>
        </Container>
    );
}

export default CashPage