import React from 'react'

const MiniCharacter = ({ character }) => {
    return (
        <div className="d-flex">
            <div className="mini-character my-2">
                <img src={character.img} alt={"character-img"} />
            </div>
            <div className="p-2 d-flex flex-column align-self-center">
                <p className="mini-info-top">{character.name}</p>
                {window.location.pathname === "/Spacious/characters" ? (
                    <p className="mini-info-bottom">{character.info}</p>
                ): (
                    <p className="mini-info-bottom">{character.friends} friends</p>
                )}
            </div>
        </div>
    )
}

export default MiniCharacter
