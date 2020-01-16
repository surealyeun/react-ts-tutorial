import React, {useState, useRef} from 'react';

type MyFormProps = {
    onSubmit: (form: {name: string; description: string}) => void;
};

function MyForm({onSubmit}: MyFormProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    const [form, setForm] = useState({
        name: '',
        description: ''
    });

    const {name, description} = form;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        });
        // console.log(form);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(form);
        setForm({
            name: '',
            description: ''
        }); // 초기화
        if(!inputRef.current){
            return ;
        }
        inputRef.current.focus();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={name} onChange={onChange} ref={inputRef}/>
            <input name="description" value={description} onChange={onChange} />
            <button type="submit">등록</button>
        </form>
    );
}

export default MyForm;