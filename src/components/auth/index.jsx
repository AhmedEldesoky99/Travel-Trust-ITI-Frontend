/* eslint-disable react/prop-types */
import { useEffect } from "react"
// eslint-disable-next-line no-unused-vars
import { useNavigate } from "react-router-dom"
import { getUserById } from "../../services/user"
import { useQuery } from "react-query"

const handleID = (role) =>{
    const IDS = {
        user:'userId',
        organizer:'localId',
        admin:'adminId'
    }
    return IDS[role]
}

export const Protect = ({role,children})=>{

    const navigate = useNavigate()
    const id = localStorage.getItem(handleID(role))
    const {data, isSuccess} = useQuery(['checkAuth/',id ],()=>getUserById(id))


    console.log(data,'data')
    console.log(isSuccess,'isSuccess')
    console.log(data?.data?.user?.role,'role')


    useEffect(()=>{
        if(!localStorage.getItem('travelJWT')||data?.data?.user?.role !== role){
            navigate('/')
        }
    },[isSuccess])

    return <>
    {children}
    </>
}