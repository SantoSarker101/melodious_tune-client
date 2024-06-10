import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";
export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(true)

	const createUser = (email, password) => {
		setLoading(true)
		return createUserWithEmailAndPassword(auth, email, password)
	}

	const signIn = (email, password) => {
		setLoading(true)
		return signInWithEmailAndPassword(auth, email, password)
	}

	const signInWithGoogle = () => {
		setLoading(true)
		return signInWithPopup(auth, googleProvider)
	}

	const logOut = () => {
		setLoading(true)
		localStorage.removeItem('access-token')
		return signOut(auth)
	}

	const updateUserProfile = (name, photo) => {
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photo,
		})
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			setUser(currentUser)
			console.log('Current User', currentUser);

			if(currentUser?.email){
			axios.post(`${import.meta.env.VITE_API_BASE_URL}/jwt`, {email: currentUser?.email})
        .then(data => {
          console.log(data.data.token);
          localStorage.setItem('access-token', data.data.token)
          setLoading(false)
        })

			}
			else{
				localStorage.removeItem('access-token')
				setLoading(false)
			}

		})
		return () => {
			return unsubscribe()
		}
	}, [])

	const authInfo = {
		user,
		loading,
		setLoading,
		createUser,
		signIn,
		signInWithGoogle,
		logOut,
		updateUserProfile
	}

	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;