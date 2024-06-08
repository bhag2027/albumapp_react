import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewallAlbum = () => {
    const [data, changeData] = useState([])
    const fetchData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/albums").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch().finally()
    }

    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar />
            <h1 align="center"><u>ALBUM DETAILS</u></h1>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col xl-12 col-xxl-12">
                        <table class="table table-success table-striped">
                            <table  class="table">
                                <thead>
                                    <tr>


                                        <th scope="col">UserId</th>
                                        <th scope="col">Id</th>
                                        <th scope="col">Title</th>

                                    </tr>
                                </thead>
                                <tbody>
                                  {data.map(
                                    (value,index)=>{
                                        return  <tr>

                                        <td>{value.userId}</td>
                                        <td>{value.id}</td>
                                        <td>{value.title}</td>
                                    </tr>
                                    }
                                  )}


                                </tbody>
                            </table>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewallAlbum