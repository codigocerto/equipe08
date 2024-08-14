import * as S from './styles';

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
};


const Input = (props: Props) => {
    return (
        <>
            <label>
                {props.title &&
                    <S.Label>
                        {props.title} {props.required}
                    </S.Label>
                }
                
                <S.Input {...props}/>
            </label>
        </>

    )
}

export default Input;
