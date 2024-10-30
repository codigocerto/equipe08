import * as S from './styles';

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    title?: string;
};

const Input = ({ title, required, ...props }: Props) => {
    return (
        <label>
            {title && (
                <S.Label>
                    {title} {required && '*'}
                </S.Label>
            )}
            <S.Input required={required} {...props} />
        </label>
    );
};

export default Input;
