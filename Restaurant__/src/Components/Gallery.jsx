import '../styles/gallery.css'

const images = ['Restaurant.jpg', 'dish1.jpg', 'dish2.jpg']
function Gallery() {
    return (
        <>
            <section id="gallery" className="gallery">
                <h2>GALLERY</h2>
                <div className="images">
                    {
                        images.map((img, index) => (
                            <img key={index} src={img} alt={'Gallery ${index+1}'} />
                        ))}
                </div>

            </section>
        </>
    );
}
export default Gallery;