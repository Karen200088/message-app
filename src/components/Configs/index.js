import {colors, colorTarget} from "../../helpers/constants";
import {useEffect, useState} from "react";

const Configs = ({handleConfigs}) => {
    const [color, setColor] = useState(colors[0])
    const [target, setTarget] = useState(colorTarget[0].target)

    useEffect(() => {
        handleConfigs({color, target})
    },[color, target])

    const changeColor = e => {
        setColor(e.target.value)
    }

    const changeTarget = e => {
        setTarget(e.target.value)
    }

    return (
        <>
            <select
                value={color}
                onChange={changeColor}
                name="selectColor"
                id="selectColor"
            >
                {
                    colors.map(color => (
                        <option key={color} value={color}>{color}</option>
                    ))
                }
            </select>
            <select
                value={target}
                onChange={changeTarget}
                name="selectTarget"
                id="selectTarget"
            >
                {
                    colorTarget.map(item => (
                        <option key={item.target} value={item.target}>{item.option}</option>
                    ))
                }
            </select>
        </>
    )
}

export default Configs
