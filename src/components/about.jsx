import React from 'react';
import myImage from '../img/myPhoto.jpg';

class About extends React.Component {
    constructor() {
        super();
        this.state = {
            about_me: [
                {
                    id: 'first-p-about',
                    content:
                        "Hi, I'm Matteas Eden, a recent Computer Engineering graduate, aspiring developer and lover of all things computers. Welcome to my little corner of the internet.",
                },
                {
                    id: 'second-p-about',
                    content:
                        "I enjoy working on a diverse variety of projects, from websites (like this one) to file servers. I take great interest in video games, whether that's playing them or making them. My favourite projects have been games because there's no better feeling than watching someone smile at something you worked on. As I move forward in my career, I hope to make a real difference in people's lives.",
                },
            ],
        };
    }

    render() {
        return (
            <section id="about" className="about-mf sect-pt4 route">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="box-shadow-full">
                                <div className="row">
                                    <div className="col-md-6">
                                        <img
                                            className="img-fluid rounded b-shadow-a"
                                            alt=""
                                            src={myImage}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="about-me pt-4 pt-md-0">
                                            <div className="title-box-2">
                                                <h5 className="title-left">
                                                    About Me
                                                </h5>
                                            </div>
                                            {this.state.about_me.map(
                                                (content) => {
                                                    return (
                                                        <p
                                                            className="lead"
                                                            key={content.id}
                                                        >
                                                            {content.content}
                                                        </p>
                                                    );
                                                }
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
