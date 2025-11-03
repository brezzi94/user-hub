import {Form, InputGroup} from "react-bootstrap";
import {Search} from "lucide-react";
import "./SearchBar.css";

interface SelectProps {
    search: string;
    setSearch: (search: string) => void;
}

export default function SearchBar({search, setSearch}: SelectProps) {
    return (
        <div className="search-bar">
            <InputGroup>
                <InputGroup.Text className="search-icon" id="search-icon" aria-hidden="true">
                    <Search size={16} />
                </InputGroup.Text>
                <Form.Control
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Cerca per nome o email..."
                />
            </InputGroup>
        </div>
    )
}
