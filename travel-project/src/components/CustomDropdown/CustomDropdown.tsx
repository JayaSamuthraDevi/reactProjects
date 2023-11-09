import React, { useState, useEffect, useRef } from 'react';
import './CustomDropdown.scss'
import { UpOutlined, DownOutlined } from '@ant-design/icons';

interface Option {
    label: string;
    value: any;
}

interface DropdownProps {
    options: Option[];
    onSelect: (selectedValue: any) => void;
    placeholder: any;
    placeholderClassName: string;
}

const CustomDropdown: React.FC<DropdownProps> = ({ options, onSelect, placeholder, placeholderClassName }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                closeDropdown();
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const openDropdown = () => {
        setIsOpen(true);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    const handleOptionClick = (option: Option) => {
        // setSelectedOption(option);  //changes selected option
        onSelect(option.value);
        closeDropdown();
    };

    return (
        <div className="custom-dropdown" ref={dropdownRef}>
            <div className={`dropdown-container ${isOpen ? 'open' : ''}`}>
                <button className="dropdown-toggle " onClick={isOpen ? closeDropdown : openDropdown}>
                    <span className={placeholderClassName} >{selectedOption ? selectedOption.label : placeholder}  {isOpen ? <UpOutlined /> : <DownOutlined />}   </span>
                </button>
                {isOpen && (
                    <ul className="dropdown-options">
                        {options.map((option, index) => (
                            <li key={index} onClick={() => handleOptionClick(option)} aria-selected >
                                {option.label}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default CustomDropdown;
