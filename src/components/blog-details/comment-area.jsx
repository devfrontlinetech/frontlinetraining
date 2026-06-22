import React from 'react';

const CommentArea = () => {
    return (
        <div className="comment-area">
            <h3 className="heading-title">Comments</h3>
            <div className="comment-list-wrapper">
                <div className="comment">
                    <div className="thumbnail">
                        <img src="/assets/images/blog/comment-01.jpg" alt="Comment Images" />
                    </div>
                    <div className="comment-content">
                        <h5 className="title">Haley Bennet</h5>
                        <span className="date">Mar 25, 2026</span>
                        <p>This article was really helpful. I especially liked the way the concepts were explained step by step. Looking forward to more posts like this!</p>
                        <div className="reply-btn-wrapper">
                            <a className="reply-btn" href="#">Reply</a>
                        </div>
                    </div>
                </div>

                <div className="comment comment-reply">
                    <div className="thumbnail">
                        <img src="/assets/images/blog/comment-02.jpg" alt="Comment Images" />
                    </div>
                     <div className="comment-content">
                        <h5 className="title">Simon Baker</h5>
                        <span className="date">Mar 24, 2026</span>
                        <p>
                            Totally agree with you! The examples made it much easier to understand. I implemented a few ideas and saw immediate improvements.
                        </p>
                        <div className="reply-btn-wrapper">
                            <a className="reply-btn" href="#">Reply</a>
                        </div>
                    </div>
                </div>

                <div className="comment">
                    <div className="thumbnail">
                        <img src="/assets/images/blog/comment-03.jpg" alt="Comment Images" />
                    </div>
                    <div className="comment-content">
                        <h6 className="title">Richard Gere</h6>
                        <span className="date">Mar 23, 2026</span>
                        <p>
                            Clean layout and very informative content. It would be great if you could also include a few real-world use cases in future updates.
                        </p>
                        <div className="reply-btn-wrapper">
                            <a className="reply-btn" href="#">Reply</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentArea;