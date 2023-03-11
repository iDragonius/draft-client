import React from 'react'
import Toast from '../portals/Toast'
import { AnimatePresence, m } from 'framer-motion'
import { Successfully } from '@/components/icons'
export interface SuccessToastProps {
	show: boolean
}

export default function SuccessToast({ show }: SuccessToastProps) {
	return (
		<AnimatePresence>
			{show && (
				<Toast>
					<m.div
						initial={{ opacity: 0, y: -100, scale: 0.3 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: -100, scale: 0.5 }}
						className='p-6 bg-[#E6FFEC] flex rounded-[4px]'
					>
						<div className='mr-3 p-[6px]'>
							<Successfully />
						</div>
						<div className='w-[380px]'>
							<h1 className='text-[18px] font-bold leading-6 mb-3'>
								Təbriklər, Qeydiyyat uğurla başa çatdı.
							</h1>
							<p className='text-[#747474] text-[14px] leading-6'>
								Növbə gözləmədən, vaxt itirmədən tam online şəkildə bütün
								nəticələri əldə edəcəksiniz.
							</p>
						</div>
					</m.div>
				</Toast>
			)}
		</AnimatePresence>
	)
}
