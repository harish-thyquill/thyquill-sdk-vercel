
import React from "react";
import { InputHTMLAttributes } from "react";
import { ButtonHTMLAttributes, FC, ReactElement, ReactNode, useState } from "react";
import './formComponents.scss';

interface FormInputInterface extends InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    error?: string,
    helperText?: string,
    startIcon?: ReactNode,
    required?: boolean,
    loader?: boolean,
    brandColor: string,
}

export const FormInput = (props: FormInputInterface) => {
    const { label, error, helperText, startIcon, required, brandColor, loader, ...inputProps } = props;
    return (
        <div className="form_input_container">
            {props.label && <label className="form_input_label">{label} {required && <span className='required_dot'>*</span>}</label>}
            <div className="form_input_box">
                {startIcon && <div className="form_input_icon">{startIcon}</div>}
                <input className={`form_input ${startIcon ? 'form_input_left' : ''} ${error ? 'form_input_error' : ''}`} {...inputProps} />
                {loader && <span style={{
                    borderTop: `2px solid ${brandColor || '#7F56D9'}`,
                }} className="loader"></span>}
            </div>
            {(!error && helperText) && <span className="form_input_helper_text">{helperText}</span>}
            {error && <span className="form_input_error_text">{error}</span>}
        </div>
    )
}

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean,
    children: ReactNode,
    startIcon?: ReactElement,
    endIcon?: ReactElement
}

export const FormButton = (props: BtnProps) => {
    const { loading, children, type, startIcon, endIcon, ...otherProps } = props;
    return (
        <>
            <button style={{
                cursor: 'pointer',
                ...((startIcon || endIcon || loading) && {
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center'
                })
            }} type={type && type === 'submit' ? 'submit' : 'button'} {...otherProps}>
                {startIcon && <span style={{
                    display: 'inherit',
                    marginRight: '8px',
                    marginLeft: '-4px'
                }}>{startIcon}</span>}
                {children}
                {endIcon && <span style={{
                    display: 'inherit',
                    marginLeft: '8px',
                    marginRight: '-4px'
                }}>{endIcon}</span>}
            </button>
        </>
    )
}

interface FormSelectButtonsProps {
    label?: string,
    value: string | number,
    options: {
        name: string,
        value: string | number
    }[],
    onChange?: (value: string | number) => void,
}

export const FormSelectButtons: FC<FormSelectButtonsProps> = ({ label, options, value, onChange }) => {
    const [filterOption, setFilterOption] = useState(value);

    return (
        <div className="from_select_buttons">
            {label && <label className="form_select_buttons_label">{label}</label>}
            <div className="form_select_buttons_filter">
                {options.map((option, key) => {
                    return (
                        <div key={key} className="filter_option_box">
                            <FormButton className={`${filterOption === option.value && 'filter_option_active'}`} onClick={() => {
                                setFilterOption(option.value)
                                if (onChange) {
                                    onChange(option.value)
                                }
                            }}>{option.name}</FormButton>
                            {options.length !== (key + 1) && <div className="vertical_divider" />}
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

interface GridProps {
    children: ReactNode,
    item?: boolean,
    xl?: number,
    lg?: number,
    md?: number,
    sm?: number,
    xs?: number,
}

export const Grid: FC<GridProps> = ({ children, item, xl, lg, md, sm, xs, }) => {
    if (!item) {
        return <div className="row">{children}</div>
    }
    else {
        return <div className={`col-xl-${xl || 0} col-lg-${lg || 0} col-md-${md || 0} col-sm-${sm || 0} col-xs-${xs || 0}`}>{children}</div>
    }
}