'use strict';
const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {liked: false};
    }

    handleLikeClick = () => {
        this.setState({liked: true, disliked: false});
    };

    render() {
        if (this.state.liked) {
            return 'Вы поставили лайк.';
        }
        return e(
            'button',
            {className: 'btn btn-success', onClick: this.handleLikeClick},
            'Лайк'
        );
    }
}

class DislikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {disliked: false};
    }

    handleDislikeClick = () => {
        this.setState({disliked: true, liked: false});
    };

    render() {
        if (this.state.disliked) {
            return 'Вы поставили дизлайк.';
        }
        return e(
            'button',
            {className: 'btn btn-danger', onClick: this.handleDislikeClick},
            'Дизлайк'
        );
    }
}

const text = React.createElement('span', null, 'Фото дня!');

const image = React.createElement('img', {
    src: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614644307_31-p-fon-parka-dlya-fotoshopa-66.jpg',
    alt: 'park_image',
    width: '500px',
    height: '350px'
});

const textContainer = document.querySelector('#text_container');
ReactDOM.render(text, textContainer)

const imageContainer = document.querySelector('#image_container');
ReactDOM.render(image, imageContainer);

const likeContainer = document.querySelector('#like_button_container');
const like = ReactDOM.createRoot(likeContainer);
like.render(e(LikeButton));

const dislikeContainer = document.querySelector('#dislike_button_container');
const dislike = ReactDOM.createRoot(dislikeContainer);
dislike.render(e(DislikeButton));