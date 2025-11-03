import { Form } from "react-bootstrap";
import "./Select.css";

interface SelectProps {
    className?: string;
    options: string[];
    value?: string;
    onChange?: (value: string) => void;
}

export default function Select({ className, options, value, onChange }: SelectProps) {
    return (
        <div className={className}>
            <Form.Select
                aria-label="Filtro per ruolo"
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
            >
                {options.map((option, index) => (
                    <option key={index} value={option === " " ? "all" : option.toLowerCase()}>
                        {option.trim() === "" ? "Tutti i ruoli" : option}
                    </option>
                ))}
            </Form.Select>
        </div>
    );
}