import { FC } from 'react';
import IDarkButtonProps from '../../../interfaces/IProps/IDarkButtonProps';

const DarkButton: FC<IDarkButtonProps> = ({label}) => {
    return (
        <button className='darkButton'>
            {label}
        </button>
    );
};

export default DarkButton;