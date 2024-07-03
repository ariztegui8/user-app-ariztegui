import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { BsColumnsGap } from "react-icons/bs";
import { LuUsers } from "react-icons/lu";
import { RiLineChartLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { IoChevronDownOutline } from "react-icons/io5";
import styles from '@/app/styles/columnIcons.module.css'

type ColunmIconsProps = {
    handleMenuColumn: () => void;
    menuColumn: boolean;
}

const ColumnIcons = ({menuColumn, handleMenuColumn} : ColunmIconsProps) => {

    return (
        <div className={`${styles.box} ${menuColumn ? styles.menuOpen : styles.menuClosed}`}>
            <div className={`p-2 flex justify-end mb-8`}>
                {menuColumn ?
                    <IoIosArrowBack
                        size={22}
                        color='#808080'
                        className='cursor-pointer'
                        onClick={handleMenuColumn}
                    />
                    :

                    <IoIosArrowForward
                        size={22}
                        color='#808080'
                        className='cursor-pointer'
                        onClick={handleMenuColumn}
                    />
                }
            </div>

            <div className='p-2 flex justify-between gap-2 items-center'>
                <div className='flex items-center gap-2 cursor-pointer'>
                    <BsColumnsGap
                        size={20}
                        color='#85C88A'
                        className='cursor-pointer'
                    />
                    <div className={`${menuColumn ? 'flex' : 'hidden'}`}>
                        <p className='text-[#64748B] text-sm'>Tableros</p>
                    </div>
                </div>

                <div className={`${menuColumn ? 'flex' : 'hidden'}`}>
                    <IoChevronDownOutline
                        size={16}
                        color='#808080'
                        className='cursor-pointer'
                    />
                </div>

            </div>

            <hr className={`my-4`} />

            <div className='p-2 flex justify-between gap-2 items-center'>
                <div className='flex items-center gap-2 cursor-pointer'>
                    <LuUsers
                        size={20}
                        color='#85C88A'
                        className='cursor-pointer'
                    />
                    <div className={`${menuColumn ? 'flex' : 'hidden'}`}>
                        <p className='text-[#64748B] text-sm'>Equipos</p>
                    </div>
                </div>

                <div className={`${menuColumn ? 'flex' : 'hidden'}`}>
                    <IoChevronDownOutline
                        size={16}
                        color='#808080'
                        className='cursor-pointer'
                    />
                </div>

            </div>

            <hr className={`my-4`} />

            <div className='p-2 flex justify-between gap-2 items-center'>
                <div className='flex items-center gap-2 cursor-pointer'>
                    <RiLineChartLine
                        size={20}
                        color='#85C88A'
                        className='cursor-pointer'
                    />
                    <div className={`${menuColumn ? 'flex' : 'hidden'}`}>
                        <p className='text-[#64748B] text-sm'>Informes</p>
                    </div>
                </div>

                <div className={`${menuColumn ? 'flex' : 'hidden'}`}>
                    <IoChevronDownOutline
                        size={16}
                        color='#808080'
                        className='cursor-pointer'
                    />
                </div>
            </div>

            <hr className={`my-4`} />

            <div className='p-2 flex justify-between gap-2 items-center'>
                <div className='flex items-center gap-2 cursor-pointer'>
                    <IoSettingsOutline
                        size={20}
                        color='#85C88A'
                        className='cursor-pointer'
                    />
                    <div className={`${menuColumn ? 'flex' : 'hidden'}`}>
                        <p className='text-[#64748B] text-sm'>Configuración</p>
                    </div>
                </div>

                <div className={`${menuColumn ? 'flex' : 'hidden'}`}>
                    <IoChevronDownOutline
                        size={16}
                        color='#808080'
                        className='cursor-pointer'
                    />
                </div>
            </div>
        </div>
    )
}

export default ColumnIcons
