import * as I from './styles';

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
};


const Input = (props: Props) => {
    return (
        <>
            <label>
                {props.title &&
                    <I.Label>
                        {props.title} {props.required}
                    </I.Label>
                }
                
                <I.Input {...props}/>
            </label>
        </>

    )
}

export default Input;
