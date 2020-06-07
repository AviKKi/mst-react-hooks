import React from "react"
import styled from 'styled-components'


const Item: React.FC<{
    name: string
    photo: string
    price: number
    onDelete?: () => void
}> = ({ name, photo, price, onDelete }) => (
    <Wrapper key={name}>
        <Img src={photo} />
        <DetailsWrapper>
            <div>
                <h2>{name}</h2>
                <Price>{price}$</Price>
            </div>
            <Controls>
                <Btn onClick={onDelete}>
                    Delete
                </Btn>
            </Controls>
        </DetailsWrapper>
    </Wrapper>
)

Item.defaultProps = {
    onDelete: () => { }
}

const Wrapper = styled.div`
height: 130px;
width: 50%;
min-width: 100px;
max-width: 400px;
background: #FFF;
border-radius: 5px;
color: #000;
margin-bottom: 10px;
border-right: 5px solid orange;
overflow: hidden;
&:hover{
    transform: translateY(-5px);
}
transition: all 0.15s;
display: flex;
`

interface ImgProps {
    src: string
}

const Img = styled.div<ImgProps>`
flex: 1;
background: url('${p => p.src}');
background-size: cover;
width: 200px;
object-fit: cover;
`

const DetailsWrapper = styled.div`
    display: flex;
    flex: 2;
    width: 100%;
    justify-content: space-between;
    flex-direction: column;
    margin: 0px 20px;
`

const Price = styled.p`
    color: #4c4c4c;
`
const Controls = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 0 10px 10px 0;
`
const red = 'rgba(255,0,0,0.6)'
const Btn = styled.button`
    background: #FFF;
    border: 1px solid ${red};
    border-radius: 4px;
    padding: 5px 10px;
    color: ${red};
    cursor: pointer;
`


export default Item