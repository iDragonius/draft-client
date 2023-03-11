import { ReactNode, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './ModalPortal.module.scss'
interface ModalProps {
	children: ReactNode
}

export default ({ children }: ModalProps) => {
	const ref = useRef<Element | null>(null)
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		ref.current = document.querySelector<HTMLElement>('#modal')
		setMounted(true)
	}, [])

	useEffect(() => {
		document.body.style.overflow = 'hidden'

		return () => {
			document.body.style.overflow = 'unset'
		}
	}, [])
	return mounted && ref.current
		? createPortal(
				<div className={styles.overlay}>{children}</div>,
				ref.current
		  )
		: null
}
