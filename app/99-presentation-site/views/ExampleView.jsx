import React from 'react';

const PhotoGalleryItem = () =>
    <div className="col-4">
        <figure>
            <div>
                <img src="./img/laptop.jpg" alt="" />
            </div>
            <figcaption>React is cool !</figcaption>
        </figure>
    </div>
    ;

const PhotoGalleryRow = () =>
    <div className="row">
        <PhotoGalleryItem />
        <PhotoGalleryItem />
        <PhotoGalleryItem />
    </div>
    ;

const ExampleView = () => <main>
    <section>
        <div className="container">
        {[1,2,3,4].map((n, i) => <PhotoGalleryRow key={i}/>)}
        </div>
    </section>
    <section className="social-media-share">
        <button className="facebook">
            <i className="fa fa-facebook-square"></i>
            <b>Share on Facebook</b>
        </button>
    </section>
</main>;

export default ExampleView;