import React, { SyntheticEvent } from "react"
import styled from 'styled-components'
import Item from './Item'
import Mark from '../../components/Mark'

interface WishlistProps {
    name: string,
    price: string,
    photo: string,
    /**
     * Input change handler
     */
    changeHandler: (e: SyntheticEvent) => void,
    /**
     * Add a new item
     */
    addHandler: (e: SyntheticEvent) => void,
}

const WishlistView: React.FC<WishlistProps> = ({ name, price, photo, changeHandler, addHandler }) => (
    <ItemsContainer>
        <h1 style={{ marginBottom: '1.3em' }}><Mark>WishList</Mark></h1>
        {items.map(Item)}
        <p>Total Price: 10</p>
        <Input
            value={name}
            onChange={changeHandler}
            style={{ marginTop: '2em' }}
            name="name"
            placeholder="Name" />
        <Input
            value={price}
            onChange={changeHandler}
            name="price"
            placeholder="Price" />
        <Input
            value={photo}
            onChange={changeHandler}
            name="photo"
            placeholder="Photo" />
        <button onClick={addHandler} className="button">
            Add
        </button>
    </ItemsContainer>
);

const Input = styled.input`
    border: none;
    border-radius: 5px;
    width: 100%;
    max-width: 400px;
    padding: 10px;
    margin: 10px 0;
`

const items = [{
    name: 'Xbox',
    photo: 'https://images.unsplash.com/photo-1571716846252-df1324ce17bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    price: 350,
}, {
    name: 'Alexa',
    photo: 'https://images.unsplash.com/photo-1536571195711-1b796f9f9f7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
    price: 100,
}]
const ItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`


export default WishlistView