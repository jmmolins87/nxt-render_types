


interface IPropsSlider {
    value: number;
    changeValue: (value: number) => void;
}


export const Slider = ({value, changeValue}: IPropsSlider) => {

    return (
        <div className="mt-2">
            <input 
                type="range" 
                value={ value }
                onChange={(e) => changeValue(+(e.target.value))}
                min={5}
                max={20}
                className="w-full" />
        </div>
    )
}