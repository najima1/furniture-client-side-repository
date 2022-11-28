import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import app from '../Firebase/Firebase'

export const AuthContext = createContext()
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();


const ContextProvider = ({ children }) => {
    const [loadin, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    //create user with email & password
    const createUserWithEmailPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //login user
    const loginUserEmailPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //signInWithGoogle
    const loginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //sign out user
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    let updateProfileUser = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }


    //get user in firebase
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser)
            setLoading(false)
        })

        return () => { return unsubscribe() }
    }, [])



    const userInfo = { user, loadin, setLoading, createUserWithEmailPassword, loginWithGoogle, signOutUser, loginUserEmailPassword, updateProfileUser }
    return (

        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>

    )
}

export default ContextProvider
