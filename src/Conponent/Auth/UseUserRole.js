import { useEffect } from "react"
import { useState } from "react"

const UseUserRole = email => {
    const [userRole, setUserRole] = useState(false)

    useEffect(() => {
        if (email) {
            fetch(`${ process.env.REACT_APP_URL }/user/role/${ email }`)
                .then(e => e.json())
                .then(data => {

                    setUserRole(data?.role)
                })
        }
    }, [email])

    return [userRole]
}

export default UseUserRole