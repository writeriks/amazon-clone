import React, {useEffect, useState} from 'react'
import {db} from '../Firebase-Backend/firebase';
import {useAuthValue} from '../store/authentication/AuthenticationProvider';
import Order from './Order';
import "./Orders.css"

function Orders() {
    const [orders, setOrders] = useState([]);
    const [{user},] = useAuthValue()
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

export default Orders
