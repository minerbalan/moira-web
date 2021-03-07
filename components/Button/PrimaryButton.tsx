import {ReactNode} from "react";

type PrimaryButtonProps = {
    children?: ReactNode
    onClick?: () => void
    className?: string
}

const PrimaryButton = ({children, className, onClick}: PrimaryButtonProps) => {
    return <button
        onClick={onClick}
        className={"focus:outline-none text-white text-sm py-2.5 px-5 m-2 rounded-md bg-gradient-to-r from-blue-400 to-blue-600 transform " + {className}}
    >{children ?? "ボタン"}</button>
}

export default PrimaryButton