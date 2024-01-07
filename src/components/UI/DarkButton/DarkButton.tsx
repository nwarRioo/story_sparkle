import IDarkButtonProps from '../../../interfaces/IProps/IDarkButtonProps';

const DarkButton: React.FunctionComponent<IDarkButtonProps> = (props: IDarkButtonProps) => {
    return (
        <button
            onClick={props.click === undefined ? undefined : props.click}
            disabled={props.disabled === undefined ? false : props.disabled}
        >
            {props.label}
        </button>
    );
};

export default DarkButton;