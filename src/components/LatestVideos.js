import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import { Modal, ModalTitle } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import Swal from "sweetalert2";
import "video-react/dist/video-react.css";
import { FacebookShareButton, WhatsappShareButton } from "react-share";
import { FacebookIcon, WhatsappIcon } from "react-share";
function LatestVideos(props) {
  const [login] = useState(localStorage.getItem("token") ? true : false);
  const [user_id, setUserId] = useState(localStorage.getItem("user_id"));
  const [showModalf, setShowModalf] = useState(false);
  const [showModall, setShowModall] = useState(false);
  const [showModallll, setShowModallll] = useState(false);
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState([]);
  const [comments, setComments] = useState([]);
  const [value, setValue] = useState("");
  const [post_id, setPostId] = useState("");

  const openCommentModal = (post) => {
    const arr = post.comments;
    setComments(arr.reverse());
    setPostId(post.id);
    setShowModalf(true);
  };
  const openLikeModal = (post) => {
    likePost(post.id);
    setPostId(post.id);
    getPosts();
  };

  const getPosts = async () => {
    try {
      var response = await axios.get(
        "https://iitn.herokuapp.com/v1/feed/allFeed"
      );

      if (response.status === 200) {
        setPosts(response.data.feeds);
        setLikes(response.data.feeds[0].like.user);
        // checkLiked(response.data.feeds[0].like.user);

        console.log("====================================");
        console.log(response.data.feeds[0].image[0]);
        console.log("====================================");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const likePost = async (feedId) => {
    if (!login) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "please login your account",
        footer: '<a href="">Why do I have this issue?</a>',
      });
      return;
    }
    try {
      let url = "https://iitn.herokuapp.com/v1/feed/likeFeed?feedId=" + feedId;
      let options = {
        method: "POST",
        url: url,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      var response = await axios(options);
      if (!user_id) {
        localStorage.setItem(
          "user_id",
          response.data.like.user[response.data.like.user.length - 1].id
        );
        setUserId(
          response.data.like.user[response.data.like.user.length - 1].id
        );
      }
      if (response.status === 200) {
        await getPosts();
        setPostId("");
        setTimeout(() => {
          setShowModall(true);
        }, 500);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const checkLiked = (post) => {
    var status = false;
    /* eslint-disable */
    post.like.user.map((like) => {
      status = false;
      if (like.id === user_id) {
        status = true;
      }
    });
    return status;
  };
  const CommentPost = async () => {
    if (value === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "please enter comment",
        footer: '<a href="">Why do I have this issue?</a>',
      });
      return;
    }
    if (!login) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "please login your account",
        footer: '<a href="">Why do I have this issue?</a>',
      });
      return;
    }
    try {
      let url =
        "https://iitn.herokuapp.com/v1/feed/addComment?feedId=" + post_id;
      let options = {
        method: "POST",
        url: url,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        data: { comment: value },
      };
      var response = await axios(options);

      if (response.status === 200) {
        setValue("");
        getPosts();
        setShowModalf(false);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  const openShareModal = () => {
    if (!login === true) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "please login your account",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    } else {
      setShowModallll(true);
    }
  };

  return (
    <>
      <Modal
        show={showModallll}
        onHide={() => {
          setShowModallll(false);
        }}
      >
        <img
          onClick={() => {
            setShowModallll(false);
          }}
          className="close_img"
          src="/images/close.svg"
          alt=""
        />
        <FacebookShareButton
          url={
            "https://up4changevone.s3.ap-southeast-2.amazonaws.com/function+now%28%29+%7B+%5Bnative+code%5D+%7D-feed-pic.mp4"
          }
          description={"aiueo"}
          className="Demo__some-network__share-button mb-3 mt-3"
        >
          <FacebookIcon size={32} round /> Facebook
        </FacebookShareButton>
        <WhatsappShareButton
          url={
            "https://up4changevone.s3.ap-southeast-2.amazonaws.com/function+now%28%29+%7B+%5Bnative+code%5D+%7D-feed-pic.mp4"
          }
          description={"aiueo"}
          className="Demo__some-network__share-button"
        >
          <WhatsappIcon size={32} round /> Whatsapp
        </WhatsappShareButton>
      </Modal>
      <Modal
        show={showModalf}
        onHide={() => {
          setShowModalf(false);
        }}
      >
        <img
          onClick={() => {
            setShowModalf(false);
            // setShowheader(false);
          }}
          className="close_img"
          src="/images/close.svg"
          alt=""
        />
        <ModalTitle className="mb-3"> Comments</ModalTitle>
        {login === true ? (
          <div>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              name="newPassword"
              className="mt-2 signup_inputs width_input w-100"
              placeholder="Enter comment"
            />
            <button onClick={CommentPost} className="logbtnf mt-2 ml-1 mb-3">
              Add Comment
            </button>
          </div>
        ) : null}
        {comments.map((comment) => {
          return (
            <p className="comment">
              <strong className="comment_user">{comment.user.username}</strong>
              {comment.comment}
            </p>
          );
        })}
      </Modal>
      <Modal
        show={showModall}
        onHide={() => {
          setShowModall(false);
        }}
      >
        <img
          onClick={() => {
            setShowModall(false);
          }}
          className="close_img"
          src="/images/close.svg"
          alt=""
        />
        <ModalTitle className="mb-3">Likes</ModalTitle>
        {likes.map((like) => {
          return (
            <>
              <strong className="comment comment_user">{like.username}</strong>
            </>
          );
        })}
      </Modal>
      <div className="orignal2">
        <h2 className="orignal2-title text-center">LATEST VIDEOS</h2>
        <Carousel
          showDots={false}
          responsive={responsive}
          autoPlay={false}
          autoPlaySpeed={99999500}
          draggable={true}
          transitionDuration={700}
          containerClass="carouselContainer"
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {posts.map((el, index) => {
            return (
              <div key={index} className="orignal_card">
                <video className="videoo" controls>
                  <source src={el.image} type="video/mp4" />
                </video>

                <div class="card_title">
                  <div
                    onClick={() => {
                      openLikeModal(el);
                    }}
                    className="likes"
                  >
                    {checkLiked(el) ? (
                      <div>
                        <img
                          className="jhg"
                          style={{ height: "15px", width: "40px" }}
                          src="/images/liked.svg"
                          alt=""
                        />
                        <p className="mb-0 ml-1 yyy">
                          {el.like.user.length}Like
                        </p>
                      </div>
                    ) : (
                      <div>
                        <img
                          className="jhg  ml-1"
                          style={{ height: "15px", width: "40px" }}
                          src="/images/likee.svg"
                          alt=""
                        />
                        <p className="jsl mt-1 ml-1">
                          {el.like.user.length}Like
                        </p>
                      </div>
                    )}
                  </div>
                  <div
                    onClick={() => {
                      openCommentModal(el);
                    }}
                    className="likes"
                  >
                    <img
                      style={{ height: "15px", width: "40px" }}
                      src="/images/Group 89.svg"
                      alt=""
                    />
                    <p className="ksk">{el.comments.length}Comment</p>
                  </div>
                  <div
                    onClick={() => {
                      openShareModal();
                    }}
                    className="likes"
                  >
                    <img
                      style={{ height: "15px", width: "40px" }}
                      src="/images/share.svg"
                      alt=""
                    />
                    <p className="ksk">Share</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}
const CustomLeftArrow = ({ onClick }) => {
  return (
    <div onClick={onClick} className="customArrowLeft pointer">
      <img className="dddd" src="/images/left-arrow.png" alt="Left"></img>
    </div>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <div onClick={onClick} className="customArrowRight pointer">
      <img className="dddd" src="/images/right-arrow.png" alt="right"></img>
    </div>
  );
};

export default LatestVideos;
