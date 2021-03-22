import {ReactNode} from "react";

type AlertColor = "red" | "RED"

type AlertProps = {
    className?: string
    color?: AlertColor
    children?: ReactNode
    onCloseClick?: () => void;
}

const Alert = ({className, color, children, onCloseClick}: AlertProps) => {
    let colorName = "bg-red-500"
    switch (color) {
        case "red":
        case "RED":
            colorName = "bg-red-500"
            break;
    }

    return <>
        <div className={`flex items-center justify-between text-white px-6 py-4 border-0 rounded mb-4 w-full ${colorName} ${className ?? ""}`}>
            <div className="flex items-center">
                <span className="text-xl inline-block mr-5"><i className="bi bi-bell"/></span>
                <span className="inline-block align-middle mr-8">{children}</span>
            </div>
            <div>
                <button
                    className="text-xl inline-block ml-5 outline-none focus:outline-none"
                    onClick={onCloseClick}>
                    <i className="bi bi-x-circle"/>
                </button>
            </div>
        </div>
    </>
}

export default Alert;