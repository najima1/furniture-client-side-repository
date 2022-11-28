import { data } from "autoprefixer";
import { useEffect, useState } from "react"

const useAuthSaveUser = user => {
    const [data, setData] = useState()

    useEffect(() => {
        fetch(`${ process.env.REACT_APP_URL }/user/${ user?.email }`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((e) => e.json())
            .then((data) => {
                setData(data)
            });
    }, [user])

    return data
}

export default useAuthSaveUser

  // fetch(`${process.env.REACT_APP_URL}/user/${user?.email}`, {
        //   method: "PUT",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(user),
        // })
        //   .then((e) => e.json())
        //   .then((data) => {
        //     localStorage.setItem("accessToken", data.data);
        //   });