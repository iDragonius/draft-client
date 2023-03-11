import { ReactNode, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './Toast.module.scss'
import { TTHoves } from '@/components/fonts'
import cx from 'classnames'
interface ToastProps {
	children: ReactNode
}

export default ({ children }: ToastProps) => {
	const ref = useRef<Element | null>(null)
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		ref.current = document.querySelector<HTMLElement>('#toast')
		setMounted(true)
	}, [])

	return mounted && ref.current
		? createPortal(
				<div className={cx(styles.overlay, TTHoves.className)}>{children}</div>,
				ref.current
		  )
		: null
}
