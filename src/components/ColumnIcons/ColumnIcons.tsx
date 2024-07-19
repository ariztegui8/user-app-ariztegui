import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { BsColumnsGap } from "react-icons/bs";
import { LuUsers } from "react-icons/lu";
import { RiLineChartLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { IoChevronDownOutline } from "react-icons/io5";
import style from './columnIcons.module.css'

type ColunmIconsProps = {
    handleMenuColumn: () => void;
    menuColumn: boolean;
}

const ColumnIcons = ({menuColumn, handleMenuColumn} : ColunmIconsProps) => {

    return (
        <div className={`${style.box} ${menuColumn ? style.menuOpen : style.menuClosed}`}>
            <div className={style.mb_forward}>
                <IoIosArrowForward 
                    color="#808080"
                    size={20}
                />
            </div>

            <div>
                <BsColumnsGap 
                    color="#85C88A"
                    size={20}
                />
            </div>

            <hr className={style.hr_color} />

            <div>
                <LuUsers 
                    color="#85C88A"
                    size={20}
                />
            </div>

            <hr className={style.hr_color} />

            <div>
                <RiLineChartLine 
                    color="#85C88A"
                    size={20}
                />
            </div>

            <hr className={style.hr_color} />

            <div>
                <IoSettingsOutline 
                    color="#85C88A"
                    size={20}
                />
            </div>
            
        </div>
    )
}

export default ColumnIcons
