import {colors, colorTarget} from "../../helpers/constants";
import {useEffect, useState} from "react";

const Configs = ({handleConfigs}) => {
    const [color, setColor] = useState(colors[0])
    const [target, setTarget] = useState(colorTarget[0].target)

    useEffect(() => {
        handleConfigs({color, target})
    }, [color, target])

    const changeColor = e => {
        setColor(e.target.value)
    }

    const changeTarget = e => {
        setTarget(e.target.value)
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row mt-4">
                    <div className="col-4 m-auto">
                        <h5>Color</h5>
                        <select
                            value={color}
                            onChange={changeColor}
                            name="selectColor"
                            id="selectColor"
                            className="form-select "
                            aria-label="Default select example"
                        >
                            {
                                colors.map(color => (
                                    <option key={color} value={color}>{color}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="col-4 m-auto">
                        <h5>Target</h5>
                        <select
                            value={target}
                            onChange={changeTarget}
                            name="selectTarget"
                            id="selectTarget"
                            className="form-select col-3 m-auto"
                            aria-label="Default select example"
                        >
                            {
                                colorTarget.map(item => (
                                    <option key={item.target} value={item.target}>{item.option}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Configs
