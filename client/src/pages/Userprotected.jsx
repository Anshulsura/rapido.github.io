import { useNavigate } from "react-router-dom";

const Userprotected = ({children}) => {

  const navigate = useNavigate()

  const token = localStorage.getItem('token');

  if(!token){
    navigate('/passengerlogin')
  }

  return (
    <>
      {children}
    </>
  )
}

export default Userprotected
