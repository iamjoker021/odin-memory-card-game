export default function Gameboard({imageList, handleClick}) {
    return (
        <section className="cards">
            {imageList.map((image) => {
                return (
                    <button 
                        key={image.id} 
                        className={"card" + " " + (image.clicked ? 'clicked' : 'not-clicked')}
                        data-id={image.id}
                        onClick={handleClick}
                    >
                        <img data-id={image.id} src={image.imageUrl} alt="dog image" />
                        <p data-id={image.id}>{image.imageUrl.match(/breeds\/([\w-]+)/)[1]}</p>
                    </button>
                )
            })}
        </section>
    )
}