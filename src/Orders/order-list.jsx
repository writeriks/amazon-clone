import React, {useEffect, useState} from 'react'
import {db} from '../Firebase-Backend/firebase';
import Order from './order';
import "./Orders.css"
import {useSelector} from 'react-redux'
import authReducerSelector from '../redux-reducer/auth-reducer/auth-reducer-selector'


function OrderList() {
    const [orders, setOrders] = useState([]);
    const user = useSelector(authReducerSelector.getCurrentUser)

    useEffect(() => {
        if (user) {
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => {
                    setOrders(snapshot.docs.map(doc =>
                    ({
                        id: doc.id,
                        data: doc.data()
                    })
                    ));
                });
        } else {
            setOrders([])
        }
    }, [user])

    return (
        <div className="orders">
            <h1>Your Orders</h1>
            <div className="orders__order">
                {orders.map((order) =>
                    <Order key={order.id} order={order} />
                )}
            </div>
        </div>
    )
}

export default OrderList
