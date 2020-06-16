import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const Sprite = styled.img`
    width: 5em;
    height: 5em;
    display: ${props => props.display};
`

const PokemonCard = (props) => {

    const [imageURL, setimageURL] = useState(null);
    const [name, setName] = useState('');
    const [PokeIndex, setPokeindex] = useState(null);
    const [Loading, setLoading] = useState(true);
    const [TooManyResquests, setTooManyResquests] = useState(false)

    useEffect(()=> {
        setName(props.name);
        props.url && setPokeindex(props.url.split('/')[props.url.split('/').length - 2]);
        PokeIndex && setimageURL(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${PokeIndex}.png?raw=true`)
    }, [props.url, props.name, PokeIndex])


    return (
        <div className="col-md-3 col-sm-6 mb-5">
            <div className="card">
                <div className="card-header">
                    {PokeIndex}
                </div>
                <Sprite 
                    className="card-img-top rounded mx-auto mt-2"
                    onLoad={() => setLoading(false)}
                    onError={() => setTooManyResquests(true)}
                    display={Loading ? "none" : "inline-block" }  
                    src={imageURL}/>
                { TooManyResquests ? (
                    <h6 className="mx-auto">
                        <span className="badge badge-danger mt-2">Too Many Requests</span>
                    </h6>
                ) : null}
                <div className="card-body mx-auto">
                    <h6 className="card-title">
                        { name ? name.toLowerCase()
                            .split(" ")
                            .map(letter => (
                                    letter.charAt(0).toUpperCase() + letter.substring(1)
                            )).join(" ") : ''
                        }
                    </h6>   
                </div>
            </div>         
        </div>
    )
}
export default PokemonCard;
