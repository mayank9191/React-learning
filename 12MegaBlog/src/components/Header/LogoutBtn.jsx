import React from "react";
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import { useNavigate } from "react-router-dom";


function LogoutBtn() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout())
    }).catch((error) => console.log(error))
    navigate('/')
  }


  return (
    <button
      onClick={logoutHandler}
      className="inline-b;ock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">
      Logout
    </button>
  )

}


export default LogoutBtn