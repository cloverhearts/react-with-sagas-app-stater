import React, { useEffect } from 'react'
import {useSelector} from 'react-redux'

export default function NotificationList(props) {
  const notifications = useSelector(state => state.notifications)
  const list = notifications.list
  return list.map(notification => <div>{notification}이 호출되었다.</div>)
}
