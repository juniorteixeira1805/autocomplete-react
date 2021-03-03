import styled from 'styled-components'

export const Formulario = styled.form`
    min-height: 100%;
    width: 80%;
    margin-top: 20px;
    display: flex;

    input {
        color: #3a3a3a;
        flex: 1;
        height: 60px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
    }

    button {
        background: #3b9eff;
        width: 20%;
        height: 60px;
        background: #fffff;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background 0.3s;

        &:hover {
            background: #0885ff;
        }
    }

`