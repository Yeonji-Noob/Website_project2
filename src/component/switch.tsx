import '../sass/components/_switch.scss';

interface Props {
    checked: boolean,
    onChange: (e: React.ChangeEvent) => void;
    checkedColor?: string;
}


const Switch: React.FunctionComponent<Props> = ({ checked, onChange, checkedColor}) => {

    return (
        <div className={'self-ui-switch'}>
            <input
                checked={checked}
                onChange={onChange}
                id={'switch-input'}
                className={'self-ui-scitch-input'}
                type="checkbox"
            />
            <label
                style={{ backgroundColor: checked ? '#06D6A0' : undefined }}
                className={'switch-label'}
                htmlFor="switch-input" />
            <span className={'self-ui-switch-button'} />
        </div>
    );


};

Switch.defaultProps = {
    checkedColor: '#06D6A0'
};

export default Switch;