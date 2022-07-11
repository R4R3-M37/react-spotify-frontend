import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const KeyboardNavigation: React.FC = () => {
	const navigate = useNavigate()

	const handleKeyboardNavigate = (e: any) => {
		if (e.key.toLowerCase() === 'a' || e.key === 'ArrowLeft') {
			return navigate(-1)
		}
		if (e.key.toLowerCase() === 'd' || e.key === 'ArrowRight') {
			return navigate(+1)
		}
		//
		if (e.key === 'Escape') {
			return navigate(-2)
		}
		if (e.code === 'Space') {
			return navigate(+2)
		}
	}

	useEffect(() => {
		document.addEventListener('keydown', handleKeyboardNavigate)
		return () => {
			document.removeEventListener('keydown', handleKeyboardNavigate)
		}
	}, [])

	return <React.Fragment />
}

export default KeyboardNavigation
