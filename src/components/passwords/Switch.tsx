




interface ISwitchProps {
    textLabel: string;
    value: boolean;
    changeValue: (value: boolean) => void;
}


export const Switch = ({textLabel, value, changeValue}: ISwitchProps) => {

    return (
        <div className="cursor-pointer p-1">
            <label htmlFor={textLabel} className="cursor-pointer me-1.5">{ textLabel }</label>
            <input 
                type="checkbox" 
                checked={value}           
                onChange={(e) => changeValue(e.target.checked)}     
                name={textLabel} 
                id={textLabel} />
        </div>
    )
}